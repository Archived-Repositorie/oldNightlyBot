const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "reset-economy",
    run: async(client,message,args,prefix) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            const embed = new Discord.MessageEmbed()
                .setTitle("Nie posidasz permisji!")
                .setDescription("Nie posidasz permisji administratora")
                .setTimestamp()
                .setColor("DARK_PURPLE")
                .setFooter("NightlyBot 2020")
            return message.reply(embed)
        }
        const text = args[0] || ""
        if(text.toLowerCase() != "accept") {
            const embed = new Discord.MessageEmbed()
                .setTitle("Czy na pewno chcesz?")
                .setDescription(`Aby zresetować ekonomię wpisz ${prefix}reset-economy accept`)
                .setTimestamp()
                .setColor("DARK_PURPLE")
                .setFooter("NightlyBot 2020")
            return message.reply(embed)
        }
        message.channel.startTyping()
        message.guild.members.cache.forEach(member => db.delete(`${message.guild.id}_currency_${member.user.id}`))
        const embed = new Discord.MessageEmbed()
            .setTitle("Gotowe!")
            .setDescription("Zresetowano  ekonomie!")
            .setTimestamp()
            .setColor("DARK_PURPLE")
            .setFooter("NightlyBot 2020")
        message.reply(embed)
        message.channel.stopTyping()
    }
}