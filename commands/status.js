const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let ip = args.slice(0).join(" ");
    if(!ip) return message.reply("Falta o ip.")
    var api = `https://mcapi.xdefcon.com/server/${ip}/full/json`

    message.channel.send(api.serverStatus)
}