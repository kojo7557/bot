const Discord = require('discord.js');

const cevaplar = [
    "yes",
    "no"
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('Insult people. **True Usage**: !gayornot <people>')
    else message.channel.send(cevap)

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['gon','ishegay'],
  permLevel: 0 
};

exports.help = {
  name: 'gayornot', 
  description: 'Find your gay friends!',
  usage: 'gayornot <people>'
};
