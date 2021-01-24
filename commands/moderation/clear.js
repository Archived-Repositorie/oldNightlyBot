const Discord = require("discord.js")

module.exports = {
    name: "clear",
    run: async(client,message,args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
            const embed = new Discord.MessageEmbed()
                .setTitle("Nie posidasz permisji!")
                .setDescription("Nie posiadasz permisji do zarządzania wiadomościami")
                .setTimestamp()
                .setColor("DARK_PURPLE")
                .setFooter("NightlyBot 2020")
            return message.reply(embed)
        }
        const number = Math.round(args[0] * 1)
        if(!number) {
            const embed = new Discord.MessageEmbed()
                .setTitle("Nie podałeś liczby!")
                .setDescription("Podaj w wiadomość jakakolwiek liczbe")
                .setTimestamp()
                .setColor("DARK_PURPLE")
                .setFooter("NightlyBot 2020")
            return message.reply(embed)
        }
        if(number > 100 || number < 1) {
            const embed = new Discord.MessageEmbed()
                .setTitle("Podana liczba jest niepoprawna!")
                .setDescription("Podaj liczbe powyżej 1 oraz mniejszą niż 100")
                .setTimestamp()
                .setColor("DARK_PURPLE")
                .setFooter("NightlyBot 2020")
            return message.reply(embed)
        }
        message.delete()
        message.channel.messages.fetch({
            limit: number,
        }).then((messages) => {
            message.channel.bulkDelete(messages).catch(error => error);
        });
        const embed = new Discord.MessageEmbed()
            .setTitle(`Usunięto ${number} wiadomość!`)
            .setTimestamp()
            .setColor("DARK_PURPLE")
            .setFooter("NightlyBot 2020")
        message.reply(embed)

    }
}