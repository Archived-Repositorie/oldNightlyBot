const DIscord = require("discord.js")

module.exports = {
    name: "kill",
    run: async(client,message,args) => {
        const member = message.mentions.members.first()
        if(!member) {
            const embed = new DIscord.MessageEmbed()
                .setTitle("Podaj użytkownika!")
                .setDescription("Podaj użytkownika którego chciałbyś zabić")
                .setTimestamp()
                .setColor("DARK_PURPLE")
                .setFooter("NightlyBot 2020")
            return message.reply(embed)
        }
        const text = args.slice(1).join(" ") || "brak"
        const embed = new DIscord.MessageEmbed()
            .setTitle("Zabiłeś użytkownika!")
            .addFields({
                name: "Powód",
                value: text
            },{
                name: "Uzytkownik",
                value: member
            })
            .setTimestamp()
            .setColor("DARK_PURPLE")
            .setFooter("NightlyBot 2020")
        message.reply(embed)
    }
}