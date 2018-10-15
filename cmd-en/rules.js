const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "**Rules**",
      description: "**In discord or in another activity all rules will count and admins will think you already read them.**",
      fields: [{
          name: "You must use the language you are in.",
          value: "**Religion, rage, language distinction isnt alloweed.**"
        },
        {
          name: "Spam isnt alloweed.",
          value: "**Special rank for special people role is private for friends.**"
        },
        {
          name: "Advertising isnt alloweed.",
          value: "**Swearing isnt alloweed.**"
        },
        {
          name: "Being rude to peoples isnt alloweed.",
          value: "**Politics isnt alloweed.**"
        },
        {
          name: "Being passive may kick you from server.",
          value: "**Click reaction if you aggree these rules.**"
        },
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "by ilker arıcı"
      }
    }
  })
};
exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['r','rule'],
  permLevel: 0 
};

exports.help = {
  name: 'rules', 
  description: 'Shows rules',
  usage: 'rules'
};
