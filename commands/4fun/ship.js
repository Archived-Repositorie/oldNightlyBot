const Discord = require("discord.js")
const fetch = require("node-fetch")

module.exports = {
    name: "ship",
    run: async(client,message,args) => {
        function getUserFromMention(mention) {
            if (!mention) return;

            if (mention.startsWith('<@') && mention.endsWith('>')) {
                mention = mention.slice(2, -1);

                if (mention.startsWith('!')) {
                    mention = mention.slice(1);
                }

                return client.users.cache.get(mention);
            }
        }
        const member = getUserFromMention(args[0])
        let member2 = getUserFromMention(args[1])
        if(!member) {
            const embed = new Discord.MessageEmbed()
                .setTitle("Nie podałeś uzytkownika!")
                .setDescription("Podaj uzytkownika w wiadomość")
                .setTimestamp()
                .setColor("DARK_PURPLE")
                .setFooter("NightlyBot 2020")
            return message.reply(embed)
        }
        if(!member2) {
            member2 = message.member
        }
        const procent = Math.floor(Math.random() * 101) + "%"
        const embed = new Discord.MessageEmbed()
            .setTitle("Licznik zakochania!")
            .addFields({
                name: "Użytkownicy",
                value: `${member} i ${member2}`
            },{
                name: "Poziom zakochania",
                value: procent
            })
            .setTimestamp()
            .setColor("DARK_PURPLE")
            .setFooter("NightlyBot 2020")
        return message.reply(embed)
    }
}