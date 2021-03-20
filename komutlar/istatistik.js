const  Discord = require("discord.js"); 
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");
const db = require("quick.db")
module.exports.run = async(client, message, args) => {
  let kullanıcı = await db.fetch(`kullanicikaraliste_${message.author.id}`);
if( kullanıcı == "aktif"){
    const userblacklist = new Discord.MessageEmbed()
    .setURL(`https://gif-botumuz.glitch.me/`)
    .setDescription(`**Destek Sunucumuza Katılarak Neden Karalisteye Alındığını Öğrenebilirsin.** [TIKLA](https://discord.gg/ayCYpEr)`)
    .setTitle("Kara Listeye Alınmışsın", true)
    .setColor("BLUE")
    .setTimestamp()
    .setImage("https://i.gifer.com/3Q7h.gif")
    .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
    message.channel.send(userblacklist);
}else{
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

    const embed = new Discord.MessageEmbed()
  .setTimestamp()
   .setColor('BLUE') 
    .addField("<:developer:822920503483695114> **Sahibim**", `<@485553705538551810>`, true)
    .addField("<:ayar_gifbot:822919624210514000> **Version**", "0.0.2", true)
    .addField("<:ayar_gifbot:822919624210514000> **Discord.JS Sürüm**",  Discord.version) 
    .addField("<:ayar_gifbot:822919624210514000> **Ping**",  client.ws.ping + `ms`, true)
    .addField("<:ayar_gifbot:822919624210514000> **Node.JS Sürüm**", `${process.version}`, true)
    .addField("<:ayar_gifbot:822919624210514000> **Bellek Kullanımı**",  (process.memoryUsage().heapUsed / 2048 / 2048).toFixed(2))
    .addField("<:ayar_gifbot:822919624210514000> **Toplam Sunucu Sayısı**", client.guilds.cache.size)
    .addField("<:ayar_gifbot:822919624210514000> **Toplam Kullanıcı Sayısı**", client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString())
    .addField("<:ayar_gifbot:822919624210514000> **Toplam Kanal Sayısı**", client.channels.cache.size)
    .addField("<:ayar_gifbot:822919624210514000> **Çalışma Süresi**", `${duration}`)
    .addField("<:ayar_gifbot:822919624210514000> **Websitesi**", `[Tıkla](https://gif-botumuz.glitch.me/)`)
    .addField("<:ayar_gifbot:822919624210514000> **Bota Oy Ver**", `[Tıkla](https://discordbots.org/bot/749677136406773902/vote)`)
    .addField("<:ayar_gifbot:822919624210514000> **Botu Davet Et**", `[Tıkla](https://discord.com/oauth2/authorize?client_id=749677136406773902&scope=bot&permissions=8)`)
    .addField("<:ayar_gifbot:822919624210514000> **Kütüphanesi**", `discord.js`) 
.setImage('https://media.discordapp.net/attachments/768181598733598791/770393016291819530/standard_3.gif')
.setFooter(`© GİF BOT 2021 Tüm Hakları Saklıdır.`)
    message.channel.send(embed);
}
}
exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: ['istatistik', 'botbilgi', 'bot-bilgi','i'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi-bot',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'istatistik [bot durumunu yazar]'
};