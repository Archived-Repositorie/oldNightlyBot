const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "set-currency",
    run: async(client,message,args,prefix) => {
        if(!message.member.hasPermission("MANAGE_GUILD")) {
            const embed = new Discord.MessageEmbed()
                .setTitle("Nie posidasz permisji!")
                .setDescription("Nie posidasz permisji do zarządzania tego serwera")
                .setTimestamp()
                .setColor("DARK_PURPLE")
                .setFooter("NightlyBot 2020")
            return message.reply(embed)
        }
        if(!args[0]) {
            const embed = new Discord.MessageEmbed()
                .setTitle("Nie podałeś znaku")
                .setDescription("Podaj w wiadomość jakąkolwiek walute")
                .setTimestamp()
                .setColor("DARK_PURPLE")
                .setFooter("NightlyBot 2020")
            return message.reply(embed)
        }
        const embed = new Discord.MessageEmbed()
            .setTitle("Zmieniono prefix")
            .setDescription(`Zmieniono walute serwerową na ${args[0]}`)
            .setTimestamp()
            .setColor("DARK_PURPLE")
            .setFooter("NightlyBot 2020")
        message.reply(embed)
        db.set(`${message.guild.id}_currency`,args[0])
    }
}