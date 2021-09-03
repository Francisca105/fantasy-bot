const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var MCIP = args.slice(0).join(" ");

  let embed = new Discord.RichEmbed()
    .setAuthor(`Minecraft Server Status`)
    .setImage("https://mcapi.us/server/image?ip=" + MCIP)
    .setColor([115, 37, 7])
    .setFooter(message.author.username + " • Fantasy Hosting")
    .setTimestamp();
  
  message.channel.send(embed);
}