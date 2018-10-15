const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send({
        embed: {
            color: 0x00AE86,
            description: `Datz so tru!`,
            image: {
                url: "https://ontrava.com/uploads/news/cover_image-14994153761602367590.jpg"
            }
        }
    })
};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['trU','Tru','true'],
  permLevel: 0 
};

exports.help = {
  name: 'tru', 
  description: 'A horse named tru',
  usage: 'tru'
};
