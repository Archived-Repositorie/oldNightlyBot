const Discord = require("discord.js")

module.exports = {
    name: "ban",
    run: async(client,message,args) => {
        if(!message.member.hasPermission("BAN_MEMBERS")) {
            const embed = new Discord.MessageEmbed()
                .setTitle("Nie posidasz permisji!")
                .setDescription("Nie posiadasz permisji do banowania użytkowników")
                .setTimestamp()
                .setColor("DARK_PURPLE")
                .setFooter("NightlyBot 2020")
            return message.reply(embed)
        }
        const member = message.mentions.members.first()
        if(!member) {
            const embed = new Discord.MessageEmbed()
                .setTitle("Podaj użytkownika!")
                .setDescription("Oznacz w wiadomość jakiegokolwiek użytkownika")
                .setTimestamp()
                .setColor("DARK_PURPLE")
                .setFooter("NightlyBot 2020")
            return message.reply(embed)
        }
        if(!member.bannable) {
            const embed = new Discord.MessageEmbed()
                .setTitle("Nie można użytkownika zbanować!")
                .setDescription("Nie posiadam permisji do banowania tego użytkownika")
                .setTimestamp()
                .setColor("DARK_PURPLE")
                .setFooter("NightlyBot 2020")
            return message.reply(embed)
        }
        const reason = args.slice(1).join(" ") || "brak"
        member.ban({
            reason: reason
        })
        const embed = new Discord.MessageEmbed()
            .setTitle("Użytkownik został pomyślnie zbanowany")
            .addFields({
                name: "Powód",
                value: reason
            },{
                name: "Użytkownik",
                value: member
            })
            .setTimestamp()
            .setColor("DARK_PURPLE")
            .setFooter("NightlyBot 2020")
        message.reply(embed)
    }
}