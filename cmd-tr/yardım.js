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
      title: "**Yardım**",
      description: "**Komutların hepsi burada görülebilir.**",
      fields: [{
          name: "!ping",
          value: "Ping ölçer."
        },
        {
          name: "!think",
          value: "Düşün... DÜŞÜN... **DÜŞÜÜÜÜÜÜÜÜÜNNN**..."
        },
        {
          name: "!8ball",
          value: "En çılgın sorularınızı cevaplayacak!"
        },
        {
          name: "!avatar",
          value: "Profil fotoğrafınızı gösterir!"
        },
        {
          name: "!doru",
          value: "TRT çocuk'daki At Doru"
        },
        {
          name: "!emoji",
          value: "Düşüncelerinizi yazıya döker!"
        },
        {
          name: "!geymidir",
          value: "Sence!"
        },
        {
          name: "!hesapla",
          value: "Matematik ödevin bu bot için zaten!"
        },
        {
          name: "!nou",
          value: "Hayır sen!"
        },
        {
          name: "!ror",
          value: "nou komutuna bir cevap!"
        },
        {
          name: "!kacsantim",
          value: "Boy değil işlev koçum!"
        },
        {
          name: "!serverikonu",
          value: "Sunucunun resmini mi sevdin! Al o zaman!"
        },
        {
          name: "!casino",
          value: "Casino oyunu oyna!"
        },
        {
          name: "!stresçarkı",
          value: "Bir döndürmeden kimse ölmedi!"
        },
        {
          name: "!şifre",
          value: "Ülkenin nükleer kodlarının hane sayısını yazarak çöz!"
        },
        {
          name: "!yaz",
          value: "Düşüncelerini bot ile ifade et!"
        },
        {
          name: "!yazıtura",
          value: "Arkadaşınla iddialaşmak için burada!"
        },
        {
          name: "!düşün",
          value: "Düşün... DÜŞÜN... **DÜŞÜÜÜÜÜÜÜÜÜNNN**..."
        },
        {
        name: "!kurallar",
        value: "Kuralları gösterir."
        },
        {
          name: "!reboot",
          value: "Bota reset atar."
        },
        {
          name: "!yardım",
          value: "Bu komutları gösterir."
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
    .setDescription('Özel mesajlarını kontrol et. :postbox:');
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
  aliases: ['tr-y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
