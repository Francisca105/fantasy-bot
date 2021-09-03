const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
    const invite = await message.channel.createInvite({ maxAge: 0 });
  message.guild.fetchInvites().then(invites => {

  let code = invites.random().code
  
    let inviteembed = new Discord.RichEmbed()
    .setTitle(":incoming_envelope: Novo convite!") 
    .addField("Aqui está seu convite!", invite.url)
    .setFooter(message.author.username + " • Fantasy Hosting")
    .setTimestamp()
    .setColor("WHITE")
    
    message.channel.send(inviteembed);
})};