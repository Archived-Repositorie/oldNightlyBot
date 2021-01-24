const Discord = require("discord.js")
const yiff = require("yiff")
const config = {
    creator: "NightlyFox",
    name: "NightlyBot",
    version: "1.0"
}

module.exports = {
    name: "yiff",
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
        const sheri = new yiff.sheri(config)
        const ee = sheri.yiff.then(e => {
            const embed = new Discord.MessageEmbed()
                .setTitle("Proszę :3")
                .setImage(e.url)
                .setTimestamp()
                .setColor("DARK_PURPLE")
                .setFooter("NightlyBot 2020")
            message.reply(embed)
        })
    }
}