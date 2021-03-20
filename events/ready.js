const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot Status : Online`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Giriş Denemesi Başarılı`);
  client.user.setStatus("online");
  client.user.setActivity(`!!yardım ` + client.guilds.cache.size + ` Sunucu ` + client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` Kullanıcı`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + client.channels.cache.size + ` adet kanala, ` + client.guilds.cache.size + ` adet sunucuya ve ` + client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
};