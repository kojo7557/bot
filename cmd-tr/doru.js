const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send({
        embed: {
            color: 0x00AE86,
            description: `Bu oldukça D0RU!`,
            image: {
                url: "https://ontrava.com/uploads/news/cover_image-14994153761602367590.jpg"
            }
        }
    })
};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['tr-doğru','tr-d0RU','tr-d0ru'],
  permLevel: 0 
};

exports.help = {
  name: 'doru', 
  description: 'At doru',
  usage: 'doru'
};
