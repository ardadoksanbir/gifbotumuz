const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');
const db = require("quick.db")
exports.run = async (client, message, args, msg) => {
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
const embed = new Discord.MessageEmbed()
.setThumbnail(client.user.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
.setImage('https://media.discordapp.net/attachments/768181598733598791/770393016291819530/standard_3.gif')
.setTimestamp()
.setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
.setColor('BLUE') 
.addField(`GİF BOT`,`
<a:elmas:816362665202155530> \`!!man\` **Rastgele Erkek Gifi Atar.**
<a:elmas:816362665202155530> \`!!woman\` **Rastgele Kadın Gifi Atar.**
<a:elmas:816362665202155530> \`!!couple\` **Rastgele Sevgili Gifi Atar.**
<a:elmas:816362665202155530> \`!!animal\` **Rastgele Hayvan Gifi Atar.**
<a:elmas:816362665202155530> \`!!anime\` **Rastgele Anime Gifi Atar.**
<a:elmas:816362665202155530> \`!!baby\` **Rastgele Bebek Gifi Atar.** 
<a:elmas:816362665202155530> \`!!avatar\` **Avatarınız Atar.** 
<a:elmas:816362665202155530> \`!!random-pp\` **Botun Bulunduğu Sunucudaki Kullanıcıların Rastgele Pplerini Atar.**
<a:elmas:816362665202155530> \`!!diğer\` **Diğer Yardım Menüsünü Gösterir.**

[Sponsor](https://discord.gg/7yGzmztMSs) \n[Website](https://gif-botumuz.glitch.me/) \n[Destek Sunucumuza Katıl (BAKIMDA)]() \n[Bota Oy Ver](https://discordbots.org/bot/749677136406773902/vote) \n[Botu Davet Etmek İçin Tıkla](https://discord.com/oauth2/authorize?client_id=749677136406773902&scope=bot&permissions=8)    
`)
    
message.channel.send({embed});
}
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['help'],
permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'ardacanımsınya',
  usage: 'yardım'
};