exports.run = (client, message, args, database) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return;
  const Discord =require("discord.js")
  const embed = new Discord.RichEmbed()
  .setAuthor("Fantasy Hosting › Central de Atendimentos", client.user.displayAvatarURL)
  .setDescription("Para abrir um atendimento em nosso Discord, bata reagir abaixo com a categoria desejada. \n\n Reaja com 🤔 para abrir um atendimento de ``dúvidas``; \n\n Reaja com <:parceria:688550975635718146> para abrir um atendimento de ``patrocíno/parceria``; \n\n Reaja com 🌐 para abrir um atendimento de ``solicitar subdomínio``; \n\n Reaja com <:tecnico:688551001724158089> para abrir um atendimento de ``suporte técnico``; \n\n Reaja com 💰 para abrir um atendimento de ``suporte financeiro``.")
  .setThumbnail(client.user.displayAvatarURL)
  .setColor("PURPLE")
  .setFooter("Fantasy Hosting › Central de Atendimentos", client.user.displayAvatarURL)
  message.channel.send(embed).then(async msg => {
    await msg.react("🤔");
    await msg.react("688550975635718146");
    await msg.react("🌐");
    await msg.react("688551001724158089");
    await msg.react("💰");
    database.ref(`Fantasy/AtendimentosConfiguração`)
    .once("value")
    .then(async function(db) {
      if(!db.val()) {
        database.ref(`Fantasy/AtendimentosConfiguração`)
        .set({
          msg: msg.id
        })
      } else {
        database.ref(`Fantasy/AtendimentosConfiguração`)
        .update({
          msg: msg.id
        })
      }
    })
  })
  
}