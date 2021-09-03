const Discord = require("discord.js")

exports.run = async (client, message, args) => {

if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Ocorreu um erro, não tens permissão, se achares que é um erro avisa um membro da equipe.')  
  message.delete()

const embed = new Discord.RichEmbed()
.setAuthor("Fantasy Hosting › Central de Atendimentos", client.user.displayAvatarURL)
.setDescription("Para abrir um atendimento em nosso Discord, bata reagir abaixo com a categoria desejada. \n\n Reaja com 🤔 para abrir um atendimento de ``dúvidas``; \n\n Reaja com <:parceria:688051406388592751> para abrir um atendimento de ``patrocíno/parceria``; \n\n Reaja com 🌐 para abrir um atendimento de ``solicitar subdomínio``; \n\n Reaja com <:tecnico:688051406317420579> para abrir um atendimento de ``suporte técnico``; \n\n Reaja com 💰 para abrir um atendimento de ``suporte financeiro``.")
.setThumbnail(client.user.displayAvatarURL)
.setColor("PURPLE")
.setFooter("Fantasy Hosting › Central de Atendimentos", client.user.displayAvatarURL)
message.channel.send(embed).then(async msg => {
  await msg.react("🤔");
  await msg.react("688051406388592751");
  await msg.react("🌐");
  await msg.react("688051406317420579");
  await msg.react("💰");
})}