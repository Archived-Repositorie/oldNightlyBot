const Discord = require("discord.js")
const akaneko = require('akaneko')

module.exports = {
    name: "hentai",
    run: async(client,message,args) => {
        if(!message.channel.nsfw) {
            const embed = new Discord.MessageEmbed()
                .setTitle("Nie odpowiedni kanał!")
                .setDescription("Użyj komendy na kanale nsfw!")
                .setTimestamp()
                .setColor("DARK_PURPLE")
                .setFooter("NightlyBot 2020")
            return message.reply(embed)
        }
        akaneko.nsfw.hentai().then(image => {
            const embed = new Discord.MessageEmbed()
                .setTitle("Proszę :3")
                .setImage(image)
                .setTimestamp()
                .setColor("DARK_PURPLE")
                .setFooter("NightlyBot 2020")
            message.reply(embed)
        })
    }
}