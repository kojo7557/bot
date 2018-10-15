const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send({
        embed: {
            color: 0x00AE86,
            description: `${message.author.tag} Thinking!`,
            image: {
                url: "https://i.postimg.cc/Ssm4TkFD/Q2973r-1.gif"
            }
        }
    })
};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['en-thonk','en-th'],
  permLevel: 0 
};

exports.help = {
  name: 'think', 
  description: 'Think, Think, THOOOOONK!!!',
  usage: 'think'
};
