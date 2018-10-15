const Discord = require('discord.js');


exports.run = function(client, message) {
message.channel.bulkDelete(20);
message.channel.send("Deleted 20 message").then(msg => {
	msg.delete(5000)
})

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'purge', 
  description: 'Deletes messages as told',
  usage: 'purge <count>'
};
