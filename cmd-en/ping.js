const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send("My ping **" + client.ping + "** ms!");
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['p'],
  permLevel: 0 
};

exports.help = {
  name: 'en-ping', 
  description: 'Shows ping of bot.',
  usage: 'en-ping'
};
