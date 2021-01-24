const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "help",
    run: async(client,message,args,prefix) => {
        let embed;
        const text = args[0]
        function applit(string) {
            return "```fix\n" + prefix + string.split(" ").join("\n"+prefix) + "```"
        }
                embed = new Discord.MessageEmbed()
                    .setTitle("Oto lista komend")
                    .addFields({
                        name: "Informacyjne",
                        value: applit("help botinfo profile"),
                        inline: true
                    },{
                        name: "Ekonomia",
                        value: applit("daily work lotto"),
                        inline: true
                    },{
                        name: "Ustawienia",
                        value: applit("reset-economy set-currency set-prefix"),
                        inline: true
                    },{
                        name: "Nsfw",
                        value: applit("rule34 hentai yiff"),
                        inline: true
                    },{
                        name: "Randomowe obrazki",
                        value: applit("cat wolf fox"),
                        inline: true
                    },{
                        name: "Moderacja",
                        value: applit("ban kick clear"),
                        inline: true
                    },{
                        name: "4Fun",
                        value: applit("kill ship"),
                        inline: true
                    })
                    .setThumbnail(client.user.avatarURL({size: 4096, dynamic: true}))
                    .setTimestamp()
                    .setColor("DARK_PURPLE")
                    .setFooter("NightlyBot 2020")
        message.reply(embed)
    }
}