const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let embed = new Discord.RichEmbed()
    .setColor([113, 149, 100])
    .setAuthor("Menu de ajuda", client.user.avatarURL)
    .setDescription("[Fantasy Hosting](https://fantasyhosting.com.br/aff.php?aff=93)")
    .addField("Ajuda", "Manda todos os comandos")
    .addField("Anuncio", "Faz um anuncio onde o comando foi feito.")
    .addField("Avatar", "Manda o avatar de um user.")
    .addField("Botinfo", "Manda as informações do bot.")
    .addField("Convite", "Manda um convite do discord.")
    .addField('Fechar', 'Fecha um ticket.')
    .addField("Hostinfo", "Manda as informações da hospedagem.")
    .addField("mcstatus", "Manda o status de um servidor de minecraft.")
    .addField('npm', 'Para instalar uma dependência.')
    .addField("Moeda", "Manda a moeda ao ar.")
    .addField("Ping", "Manda o ping do bot.")
    .addField("Precos", "Manda uma tabela de preços das hospedagens.")
    .addField("Site", "Manda o site da Fantasy.")
    .addField("Sugestao", "Faz uma sugestão para o servidor.")
    .addField('Termos', 'Manda os termos da empresa')
    .setFooter(message.author.username + " • Fantasy Hosting")
    .setTimestamp();

  message.channel.send(embed);

} 