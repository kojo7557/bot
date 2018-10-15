const Discord = require('discord.js');
const generator = require('generate-password');


exports.run = function(client, message, args) {
    var uzunluk = args.slice(0).join(' ');

    if (!uzunluk) return message.reply('Tell longness. **True Usage**: !password <longness>')



    var password = generator.generate({
        length: uzunluk,
        numbers: true,
    })

    message.channel.send(password);
};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['en-pw','en-pass'],
  permLevel: 0 
};

exports.help = {
  name: 'password', 
  description: 'Creates random password.',
  usage: 'password <longness>'
};
