const Discord = require("discord.js")

exports.run = async (client, message, args) => {
   let S = args.slice(0)
                .join(" ");
        if (!S) return message.reply("Para executares este comando faz:\n``fh!sugestao *SUGESTÃO*``")
  
  let embed = new Discord.RichEmbed()
    .setAuthor("Sugestão")
    .setDescription("\n" + S + "\n")
    .setColor([0, 153, 255])
    .setFooter(message.author.username + " • Fantasy Hosting")
    .setTimestamp();
  
    const m = await message.guild.channels.get("672152961882914836").send(embed);
    m.react("✅");
    m.react("❎");

    
}