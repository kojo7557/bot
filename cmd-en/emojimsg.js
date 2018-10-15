const Discord = require('discord.js');

const mapping = {
    ' ': '   ',
    '0': ':zero:',
    '1': ':one:',
    '2': ':two:',
    '3': ':three:',
    '4': ':four:',
    '5': ':five:',
    '6': ':six:',
    '7': ':seven:',
    '8': ':eight:',
    '9': ':nine:',
    '!': ':grey_exclamation:',
    '?': ':grey_question:',
    '#': ':hash:',
    '*': ':asterisk:'
};

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
	mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
});


exports.run = function(client, message, args) {

	if (args.length < 1) return message.reply('Please enter a sentence. **True Usage**: !emojimsg <message>')
		
	message.channel.send(args.join(' ').split('').map(c => mapping[c] || c).join(' '));

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['emoji'],
  permLevel: 0 
};

exports.help = {
  name: 'emojimsg', 
  description: 'Makes your sentences to emojis',
  usage: 'emojimsg <message>'
};
