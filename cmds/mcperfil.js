module.exports.command = {
    name: "mcperfil",
    aliases: ["mcskin", "mcnick", "mcbody", "mci", "mchead", "mcinfo", "mcp"],
    description: "Envia o perfil de um jogador de minecraft.",
    category: "Minecraft",
    usage: "mcperfil <nick>"
}

exports.run = async (fh, message, args) => {
    const request = require('request')
    const discord = require('discord.js')
    const config = require('../config.json'),
    b = config.textos.emojis.bola
    let nick = args[0]
    if(!nick) return message.channel.send('Indique um nick para procurar!')


    request(`https://api.mojang.com/users/profiles/minecraft/${nick}`, function (err, response, body){

        if(!body) {
            let emoji1 = fh.emojis.cache.get(config.textos.emojis.ids.offline)
            let erro = new discord.MessageEmbed()
            .setTitle(`${emoji1} Erro`)
            .setDescription(`Não encontrei o/a jogador/a \`${nick}\`\n`)
            .setFooter(`${message.author.username} ${config.textos.footer}`)
            .setColor(config.cores.vermelho)

            return message.channel.send(erro)
        }
        body = JSON.parse(body)
        let uuid = body.id

        request(`https://api.mojang.com/user/profiles/${uuid}/names`, function(err, response, body){
            body = JSON.parse(body)

            let array = body

            let list = array.map(function(listar){
                return listar.name
            })

            let embed = new discord.MessageEmbed()
            .setTitle(`Informações de ${nick}`)
            .setDescription(`\n${b} Skin:\n [Baixe aqui](https://minotar.net/download/${nick})\n
            ${b} Healmet:\n [Opção 1](https://minotar.net/helm/${nick}/100.png), [Opção 2](https://minotar.net/cube/${nick}/100.png) \n
            ${b} Body:\n [Veja aqui](https://minotar.net/armor/body/${nick}/100.png)\n
            ${b} Histórico de nicks:\n\`\`${list.join(', ')}\`\``)
            //.setImage(``)
            .setThumbnail(`https://minotar.net/cube/${nick}/100.png`)
            .setColor(config.cores.roxo)

            message.channel.send(embed)
        })
    })
}