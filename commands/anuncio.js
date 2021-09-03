const Discord = require("discord.js")

exports.run = async (client, message, args) => {

if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Ocorreu um erro, não tens permissão, se achares que é um erro avisa um membro da equipe.')  
  
   let N = args.slice(0)
                .join(" ");
        if (!N) return message.reply("Para executares este comando faz:\n``fh!anuncio *ANÚNCIO*``")
  
  let embed = new Discord.RichEmbed()
    .setAuthor("Anúncio")
    .setDescription("\n"+ N + "\n")
    .setColor("RANDOM")
    .setFooter(message.author.username + " • Fantasy Hosting")
    .setTimestamp();
  
  message.channel.send(embed);
}