const Discord = require('discord.js');

const cevaplar = [
    "yes",
    "no",
    "maybe",
    "ask me later",
    "no way"
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('Ask a question. **True Usage**: !8ball <question>')
    else message.channel.send(cevap)

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: '8ball', 
  description: 'Magical 8ball will answer your questions',
  usage: '8ball <question>'
};
