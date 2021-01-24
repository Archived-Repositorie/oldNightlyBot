const Discord = require("discord.js")

function applit(string) {
    return "```css\n" + "$[" + string.split(" ").join("]\n$[") + "]```"
}

module.exports = {
    name: "tags",
    run: async(client,message,args) => {
        const embed = new Discord.MessageEmbed()
            .setTitle("Lista tagów")
            .addFields({
                name: "Użytkownik",
                value: applit("member.id member.avatar member.tag member.name member.mention")
            },{
                name: "Serwer",
                value: applit("server.name server.avatar server.owner.name")
            })
            .setDescription("O to lista tagów które mozesz użyć w komendach z kategorii Lobby\n")
            .setTimestamp()
            .setColor("DARK_PURPLE")
            .setFooter("NightlyBot 2020")
        message.reply(embed)
    }
}