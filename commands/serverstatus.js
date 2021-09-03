const Discord = require('discord.js');

exports.run = (client, message, args) => {

    let IP = args.slice(0)
    .join(" ");

    if (!IP) return message.reply("Para executares este comando faz:\n``fh!serverstatus *IP* *PORTA*``")

    let PORTA = args.slice(1)
    .join(" ");    

    if (!PORTA) return message.reply("Para executares este comando faz:\n``fh!serverstatus *IP* *PORTA*``")
    if (PORTA < 20000) return message.reply("A porta tem de ser um número!")

const ping = require('minecraft-server-util')

ping(IP, PORTA, (error, reponse) =>{

    if(error) throw error
    
    const Embed = new Discord.RichEmbed()
    .setTitle('Server Status')
    .addField('Server IP', reponse.host)
    .addField('Server Version', reponse.version)
    .addField('Online Players', reponse.onlinePlayers)
    .addField('Max Players', reponse.maxPlayers)
   
    message.channel.send(Embed)


})
}