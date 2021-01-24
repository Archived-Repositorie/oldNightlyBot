const Discord = require("discord.js")

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

module.exports = {
    name: "kick",
    run: async(client,message,args) => {
        if(!message.member.hasPermission("KICK_MEMBERS")) {
            const embed = new Discord.MessageEmbed()
                .setTitle("Nie posiadasz permisji!")
                .setDescription("Nie posiadasz permisji do wyrzucania użytkowników")
                .setTimestamp()
                .setColor("DARK_PURPLE")
                .setFooter("NightlyBot 2020")
            return message.reply(embed)
        }
        const member = message.mentions.members.first()
        if(!member) {
            const embed = new Discord.MessageEmbed()
                .setTitle("Podaj użytkownika!")
                .setDescription("Oznacz w wiadomość jakiegokolwiek użytkownika")
                .setTimestamp()
                .setColor("DARK_PURPLE")
                .setFooter("NightlyBot 2020")
            return message.reply(embed)
        }
        if(!member.kickable) {
            const embed = new Discord.MessageEmbed()
                .setTitle("Nie można użytkownika wyrzucić!")
                .setDescription("Nie posiadam permisji do wyrzucania tego użytkownika")
                .setTimestamp()
                .setColor("DARK_PURPLE")
                .setFooter("NightlyBot 2020")
            return message.reply(embed)
        }
        const reason = args.slice(1).join(" ") || "brak"
        member.kick()
        const embed = new Discord.MessageEmbed()
            .setTitle("Użytkownik został pomyślnie wyrzucony")
            .addFields({
                name: "Powód",
                value: reason
            },{
                name: "Użytkownik",
                value: member
            })
            .setTimestamp()
            .setColor("DARK_PURPLE")
            .setFooter("NightlyBot 2020")
        message.reply(embed)
    }
}