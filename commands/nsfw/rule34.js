const { posts } = require("rule34js")
const Discord = require("discord.js")
module.exports = {
    name: "rule34",
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
        if(!args[0]) {
            const embed = new Discord.MessageEmbed()
                .setTitle("Nic nie podałeś!")
                .setDescription("Podaj jakąkolwiek nazwe obrazka")
                .setTimestamp()
                .setColor("DARK_PURPLE")
                .setFooter("NightlyBot 2020")
            return message.reply(embed)
        }
        const response = await posts({tags:[args[0]]})
        if(!response.posts) {
            const embed = new Discord.MessageEmbed()
                .setTitle("Nie znaleziono!")
                .setDescription("Nie znaleziono żadnego obrazka o takiej kategorii")
                .setTimestamp()
                .setColor("DARK_PURPLE")
                .setFooter("NightlyBot 2020")
            return message.reply(embed)
        }
        try {
            const values = response.posts
            const randomValue = values[parseInt(Math.random() * values.length)]
            const embed = new Discord.MessageEmbed()
                .setTitle("Proszę :3")
                .setImage(randomValue.file_url)
                .setTimestamp()
                .setColor("DARK_PURPLE")
                .setFooter("NightlyBot 2020")
            message.reply(embed)
        }catch(err) {
            const embed = new Discord.MessageEmbed()
                .setTitle("Nie znaleziono!")
                .setDescription("Nie znaleziono żadnego obrazka o takiej kategorii")
                .setTimestamp()
                .setColor("DARK_PURPLE")
                .setFooter("NightlyBot 2020")
            message.reply(embed)
        }
    }
}
