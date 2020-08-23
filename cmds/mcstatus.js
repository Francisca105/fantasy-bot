module.exports.command = {
    name: "mcstatus",
    aliases: ["mcserver", "mcs", "mcst", "mcsu", "mcss", "mcservidor", "mcip"],
    description: "Envia o status de um servidor de minecraft.",
    category: "Minecraft",
    usage: "mcstatus <ip>"
}

exports.run = async (fh, message, args) => {
    const request = require('request'),
    discord = require('discord.js'),
    config = require('../config.json')

    let ip = args[0]
    if(!ip) ip = config.hospedagem.servidor_mine

    request(`https://api.mcsrvstat.us/2/${ip}`, function (error, response, body) {
        if(!body) return message.channel.send(`Erro.`);
        let server = JSON.parse(body)

        let embed = new discord.MessageEmbed()
        .setFooter(`${message.author.username} ${config.textos.footer}`)

        if(server.online === false){
            let emojiOFF = fh.emojis.cache.get(config.textos.emojis.ids.negado)
            embed.setTitle(`${emojiOFF} ${ip}`)
            embed.setDescription(`O servidor está atualmente offline.`)
            embed.setThumbnail('https://i.gyazo.com/421b1bc2a7f214e9ca778bec92fda00b.png')
            embed.setColor(config.cores.vermelho)
            //embed.setThumbnail(`https://api.mcsrvstat.us/icon/${ip}`)

            message.channel.send(embed)
        } else {
            let emojiON = fh.emojis.cache.get(config.textos.emojis.ids.online)
                embed.setTitle(`${emojiON} ${ip}`)
                embed.setColor(config.cores.verde)
                embed.addField(`Ip do servidor:`, `${server.ip}:${server.port} `, true)

                embed.addField(`Mods:`, server.motd.clean, true)
                embed.addField(`Players:`, `${server.players.online} / ${server.players.max}`, true)
                embed.addField(`Versão: `, server.version, true)
                embed.addField(`Hostname:`, server.hostname || 'Não definido.', true)
                embed.addField(`Software:`, server.software || 'Desconhecido.', true)

                if(server.plugins) embed.addField(`Plugins`, server.plugins.names || 'Sem plugins', true)
                    embed.setThumbnail(`https://api.mcsrvstat.us/icon/${ip}`)
                    message.channel.send(embed)
        }
    })
}
