const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.author.send({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "**Help**",
      description: "**You can see all commands here.**",
      fields: [{
          name: "!ping",
          value: "Pings bot."
        },
        {
          name: "!8ball",
          value: "Will answer maddest questions!"
        },
        {
          name: "!avatar",
          value: "Shows your profile photo!"
        },
        {
          name: "!doru",
          value: "A horse named as TRU"
        },
        {
          name: "!emoji",
          value: "Tell what you think with emojis!"
        },
        {
          name: "!gayornot",
          value: "You think?"
        },
        {
          name: "!calculate",
          value: "Your math work for this bot!"
        },
        {
          name: "!nou",
          value: "NO YOU!"
        },
        {
          name: "!ror",
          value: "Reverse of Reverse!"
        },
        {
          name: "!servericon",
          value: "Shows server icon!"
        },
        {
          name: "!slots",
          value: "Try your luck!"
        },
        {
          name: "!fidgetspinner",
          value: "Nobody died from 1 flip!"
        },
        {
          name: "!password",
          value: "Get your nuclear codes!"
        },
        {
          name: "!say",
          value: "Talk with bot commands!"
        },
        {
          name: "!headsortail",
          value: "Deal with your friend!"
        },
        {
          name: "!think",
          value: "Think... THIINK...**THIIIIINK...**"
        },
        {
        name: "!rules",
        value: "Shows rules."
        },
        {
          name: "!reboot",
          value: "Resets bot."
        },
        {
          name: "!help",
          value: "Shows these commands."
        },
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "by ilker arıcı"
      }
    },
});
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Check your private messages. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.sendCode('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Shows all commands.',
  usage: 'help [command]'
};
