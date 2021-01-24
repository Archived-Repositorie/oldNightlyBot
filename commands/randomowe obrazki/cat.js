const Discord = require("discord.js")
const yiff = require("yiff")
const config = {
    creator: "NightlyFox",
    name: "NightlyBot",
    version: "1.0"
}

module.exports = {
    name: "cat",
    run: async(client,message,args) => {
        const sheri = new yiff.sheri(config)
        const ee = sheri.cat.then(e => {
            const embed = new Discord.MessageEmbed()
                .setTitle("Kotek")
                .setImage(e.url)
                .setTimestamp()
                .setColor("DARK_PURPLE")
                .setFooter("NightlyBot 2020")
            message.reply(embed)
        })
    }
}