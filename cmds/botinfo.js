module.exports.command = {
    name: "botinfo",
    aliases: ["bi", "bot", "infobot", "boti", "infob"],
    description: "Envia as informações do bot.",
    category: "Informação",
    usage: "botinfo"
}

exports.run = async (fh, message, args) => {
    const discord = require('discord.js')
    const config = require('../config.json')
    const package = require('../package.json')
    let dev = config.dona

    function duration(ms) {
        const sec = Math.floor((ms / 1000) % 60).toString()
        const min = Math.floor((ms / (1000 * 60)) % 60).toString()
        const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
        const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
        return `${days.padStart(1, '0')} dias, ${hrs.padStart(2, '0')} horas, ${min.padStart(2, '0')} minutos, ${sec.padStart(2, '0')} segundos.`
    }

    let enviar = new discord.MessageEmbed()
    .setTitle(`Bot info`)
    .setDescription(`Bot desenvolvido para a fantasy hosting pela Diretora Francisca para ajudar no seu gerenciamento.`)
    .addField(`Criadora:`, `<@${dev}>`, true)
    .addField(`Uptime`, duration(fh.uptime), true)
    .addField(`Discord.js`, `${package.dependencies["discord.js"]}`, true)
    .setFooter(`${message.author.username} ${config.textos.footer}`)
    .setThumbnail(fh.user.avatarURL())
    .setColor('#9b42f5')

    message.channel.send(enviar)
}