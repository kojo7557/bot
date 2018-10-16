const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "**Rules**",
      description: "**In this server, you must read the rules and follow them.  Admins assume you read them.**",
      fields: [{
          name: "You must use the language you speak natively.",
          value: "**Religion, race, and language discrimination isn't allowed.**"
        },
        {
          name: "Spam isn't alloweed.",
          value: "**Only people who are friends get certain roles.**"
        },
        {
          name: "Advertising isn't allowed.",
          value: "**Swearing isn't allowed in excessive amounts.**"
        },
        {
          name: "Being rude to peoples isn't alloweed.",
          value: "**Please do not discuss politics in this server.**"
        },
        {
          name: "If you remain inactive and offline for extended periods of time, you will be kicked from the server
.",
          value: "**Click your flag if you agree with these rules.**"
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
