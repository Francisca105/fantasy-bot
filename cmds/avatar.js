module.exports.command = {
    name: "avatar",
    aliases: ["logo", "av"],
    description: "Envia o teu avatar ou de uma pessoa.",
    category: "Informação",
    usage: "avatar (pessoa)"
}

exports.run = async (fh, message, args) => {
    const discord = require('discord.js')
    const {findUser} = require('../utils/findUser')
    const config = require('../config.json')

    let pessoa = args.slice(0).join()
    let user;
    if(!pessoa) user = message.author
    if(pessoa) user = findUser(pessoa, message).user
    let avatar = user.avatarURL()

    let embed = new discord.MessageEmbed()
    .setTitle(`Avatar de ${user.username}`)
    .setImage(avatar)
    .setFooter(`${message.author.username} ${config.textos.footer}`)
    .setColor(config.cores.rosa_escuro)

    message.channel.send(embed).then(async a => {
        await a.react('👍')
        await a.react('👎')
        await a.react('😄')
        await a.react('❤️')
        await a.react('😮')
        await a.react('😢')
        await a.react('😡')
    })
}