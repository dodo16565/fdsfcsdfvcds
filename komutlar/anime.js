const Discord = require('discord.js');
const client = new Discord.Client();
var gis = require('g-image-search');

exports.run = (client, message) => {
  sb = message.content.substring(5)
         message.channel.send("**Anime Arıyorum Bekle!**").then((msg) =>
				gis('cat').then(function logResults(results) {
					results = results.slice(0, 20)
					img = results[Math.floor(Math.random() * results.length)]
					if (img === undefined) {
						msg.edit("https://cdn.discordapp.com/attachments/700828813315276811/791749181504880640/uchiha.jpg")
						return
					}
					msg.edit(img)
				}).catch(function(err) {
					console.log(err);
					msg.edit("```Yine bulamadım !```")
				}));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'anime',
  description: 'anime gösterir.',
  usage: 'anime'
};
