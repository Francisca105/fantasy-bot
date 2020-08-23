module.exports.simplesEmbed = (desc, nome, cor) => {
    const discord = require('discord.js')
    const fh = require('../index')
    const config = require('../config.json')

    let embed = new discord.MessageEmbed()
    .setTitle(`${fh.emojis.cache.get(config.textos.emojis.ids.bloco)} Fantasy Hosting`)
    .setDescription(desc)
    .setColor(cor || "#2c2f33")
    .setFooter(`${nome} ${config.textos.footer}`)

    return embed;
}