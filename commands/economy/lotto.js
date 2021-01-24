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
    name: "lotto",
    run: async(client,message,args,prefix) => {
        const currency = db.get(`${message.guild.id}_currency`) || "&"
        if(!(args[0] * 1 && args[1] * 1 && args[2] * 1)) {
            const embed = new Discord.MessageEmbed()
                .setTitle("Podaj argumenty!")
                .setDescription(`Podaj trzy liczby`)
                .setTimestamp()
                .setColor("DARK_PURPLE")
                .setFooter("NightlyBot 2020")
            return message.reply(embed)
        }
        if(!(db.get(`${message.guild.id}_currency_${message.author.id}`) > 99)) {
            const embed = new Discord.MessageEmbed()
                .setTitle("Nie posiadasz pieniędzy!")
                .setDescription(`Aby zagrać musisz posiadać 100${currency} lub więcej`)
                .setTimestamp()
                .setColor("DARK_PURPLE")
                .setFooter("NightlyBot 2020")
            return message.reply(embed)
        }
        const date1 = new Date();
        const date2 = db.get(`${message.author.id}_lotto_${message.guild.id}_time`) || 100000000000000
        const timeDiff = Math.abs(date2 - date1.getTime());
        const timeDiffInSecond = Math.ceil(timeDiff / 1000);
        if(!(timeDiffInSecond >= 1200)) {
            const embed = new Discord.MessageEmbed()
                .setTitle("Używasz zbyt często komendy!")
                .setDescription(`Użyj komende za ${time(600 - timeDiffInSecond)}`)
                .setTimestamp()
                .setColor("DARK_PURPLE")
                .setFooter("NightlyBot 2020")
            db.set(`${message.author.id}_lotto_${message.guild.id}_time`, date2)
            return message.reply(embed)
        }
        db.add(`${message.guild.id}_currency_${message.author.id}`, -100)
        db.set(`${message.author.id}_work_${message.guild.id}_time`, date1.getTime())
        const numbers = {
            _1: random(1,50),
            _2: random(1,50),
            _3: random(1,50)
        }
        const arguments = {
            _1: Math.round(args[0]),
            _2: Math.round(args[1]),
            _3: Math.round(args[2])
        }
        let gg = `Przegrałeś! Straciłeś pieniadze które dałeś na lotto, czyli 100${currency}`
        if(arguments._1 == numbers._1 || arguments._2 == numbers._2 || arguments._3 == numbers._3) {
            gg = `Wygrałeś! Zdobyłeś 200${currency}`
            db.add(`${message.guild.id}_currency_${message.author.id}`, 300)
        }
        const i = arguments == numbers
        const embed = new Discord.MessageEmbed()
            .setTitle("Losowanie!")
            .addFields({
                name: "Twoje liczby",
                value: `${arguments._1} ${arguments._2} ${arguments._3}`
            },{
                name: "Liczby wylosowane",
                value: `${numbers._1} ${numbers._2} ${numbers._3}`
            })
            .setDescription(gg)
            .setTimestamp()
            .setColor("DARK_PURPLE")
            .setFooter("NightlyBot 2020")
        message.reply(embed)
    }
}