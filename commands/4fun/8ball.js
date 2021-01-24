const Discord = require("discord.js")
const fetch = require("node-fetch")
module.exports = {
    name: "8ball",
    run: async(client,message,args) => {
        const text = args.slice(0).join(" ")
        if(!text) {
            const embed = new Discord.MessageEmbed()
                .setTitle("Podaj pytanie!")
                .setDescription("Podaj pytanie na które byś chciał odpowiedzi")
                .setTimestamp()
                .setColor("DARK_PURPLE")
                .setFooter("NightlyBot 2020")
            return message.reply(embed)
        }
        const { random } = await fetch('http://35.202.101.100/api/randomize.php?plik=https://pastebin.com/raw/fAQpPCaC').then(response => response.json());
        const embed = new Discord.MessageEmbed()
            .setTitle("8ball")
            .addFields({
                name: "Twoje pytanie",
                value: text
            },{
                name: "Odpowiedzi na pytanie",
                value: random
            })
            .setTimestamp()
            .setColor("DARK_PURPLE")
            .setFooter("NightlyBot 2020")
        message.reply(embed)
    }
}