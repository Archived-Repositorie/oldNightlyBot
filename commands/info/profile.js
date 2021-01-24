const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "profile",
    run: async(client,message,args) => {
     const currency = db.get(`${message.guild.id}_currency`) || "&"
     const member = message.mentions.members.first() || message.member
     const embed = new Discord.MessageEmbed()
         .setTitle(`Informacje o użytkowniku ${member.user.tag}`)
         .addFields({
             name: "ID",
             value: member.user.id
         },{
             name: "Najwyższa rola",
             value: member.roles.highest
         },{
             name: "Status",
             value: member.user.presence.status
         },{
             name: "Pieniądze",
             value: db.get(`${message.guild.id}_currency_${member.user.id}`) || 0 + currency || 0
         })
         .setThumbnail(member.user.avatarURL({size: 4096, dynamic: true}))
         .setTimestamp()
         .setColor("DARK_PURPLE")
         .setFooter("NightlyBot 2020")
        message.reply(embed)
    }
}