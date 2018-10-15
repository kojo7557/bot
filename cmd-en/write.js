const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('You must write something to let me say.');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say', 'wrote'],
  permLevel: 0
};

exports.help = {
  name: 'write',
  description: 'Writes what you want.',
  usage: 'write [what you want him say]'
};
