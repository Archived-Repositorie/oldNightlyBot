const Discord = require("discord.js")
const db = require("quick.db")
function time(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " godzina, " : " godzin, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minuta, " : " minut, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " sekunda" : " sekund") : "";
    return hDisplay + mDisplay + sDisplay;
}
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
module.exports = {
    name: "daily",
    run: async(client,message,args) => {
        const currency = db.get(`${message.guild.id}_currency`) || "&"
        const randome = random(100,500)
        const date1 = new Date();
        const date2 = db.get(`${message.author.id}_daily_${message.guild.id}_time`) || 100000000000000
        const timeDiff = Math.abs(date2 - date1.getTime());
        const timeDiffInSecond = Math.ceil(timeDiff / 1000);
        if(!(timeDiffInSecond >= 86400)) {
            const embed = new Discord.MessageEmbed()
                .setTitle("Aby odebrać nagrode musisz poczekać!")
                .setDescription(`Użyj komende za ${time(86400 - timeDiffInSecond)}`)
                .setTimestamp()
                .setColor("DARK_PURPLE")
                .setFooter("NightlyBot 2020")
            db.set(`${message.author.id}_daily_${message.guild.id}_time`, date2)
            return message.channel.send(embed)
        }
        db.set(`${message.author.id}_daily_${message.guild.id}_time`, date1.getTime())
        db.add(`${message.guild.id}_currency_${message.author.id}`,randome)
        const embed = new Discord.MessageEmbed()
            .setTitle("Otrzymałeś nagrode!")
            .setDescription(`Otrzymałeś ${randome}${currency}`)
            .setTimestamp()
            .setColor("DARK_PURPLE")
            .setFooter("NightlyBot 2020")
        message.reply(embed)
    }
}