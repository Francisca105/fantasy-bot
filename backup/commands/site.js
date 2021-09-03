const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let embed = new Discord.RichEmbed()
    .setColor([113, 140, 45])
    .setAuthor("Site Fantasy", client.user.avatarURL)
    .setDescription("Clique em [Site](https://fantasyhosting.com.br/aff.php?aff=93) para abrir o link do site.")
    .setFooter(message.author.username + " • Fantasy Hosting")
    .setTimestamp();

  message.channel.send(embed);

} 