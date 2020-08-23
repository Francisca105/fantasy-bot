module.exports.command = {
    name: "ping",
    aliases: ["pong"],
    description: "Envia o ping do bot.",
    category: "Informação",
    usage: "ping"
}

exports.run = async (fh, message, args) => {
    const discord = require('discord.js')
    const config = require('../config.json')
    let mandar = await message.channel.send(`A calcular o ping.`)
    let api_ping = fh.ws.ping

    mandar.edit(new discord.MessageEmbed()
    .setTitle(`Ping`)
    .setTimestamp()
    .setDescription(`
    Ping da Api => ${api_ping} ms
    Ping da Hospedagem => ${mandar.createdAt - message.createdAt} ms
    `)
    .setFooter(`${message.author.username} ${config.textos.footer}`)
    .setColor('RANDOM')
    )
}