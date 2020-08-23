module.exports.command = {
    name: "anuncio",
    aliases: ["anúncio", "anunciar", "avisar", "anouncement", "an"],
    description: "Faz um anúncio num canal à sua escolha.",
    category: "Moderação",
    usage: "anúncio (canal)"
}

exports.run = async (fh, message, args) => {
    const discord = require('discord.js'),
    config = require('../config.json'),
    {findCanal} = require('../utils/findCanal'),
    {simplesEmbed} = require('../utils/simplesEmbed')
    
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`Não tens permissão para executar este comando!`)

    let Fcanal = args.slice(0).join(' ')
    let canal = message.channel
    if(Fcanal){
        canal = findCanal(Fcanal, message)
    } 
    

    if(canal === null) return message.channel.send(`O canal que escolheu não é válido!`)
    let username = message.author.username
    
    message.channel.send(simplesEmbed(`**Indique o título do anúncio.**\n\n\`\`Escreva cancelar para cancelar o anúncio.\`\``, username))
    const c1 = message.channel.createMessageCollector(m => m.author.id === message.author.id, { max: 1, time: 100000})

        c1.on('collect', msg1 => {
            let titulo = msg1.content
            //console.log(msg1)
            if(titulo === "cancelar") return message.channel.send(`Anúncio cancelado.`)
            else{
                message.channel.send(simplesEmbed(`**Qual o anúncio?**\n\n\`\`Escreva cancelar para cancelar o anúncio.\`\``, username))

                const c2 = message.channel.createMessageCollector(m => m.author.id === message.author.id, { max: 1, time: 100000})
                    c2.on('collect', msg2 => {
                        let description = msg2.content
                        if(description === "cancelar") return message.channel.send(`Anúncio cancelado.`)
                        message.channel.send(simplesEmbed(`**Qual imagem pretende colocar?**\n\n\`\`Escreva cancelar para cancelar o anúncio.\nEscreva nenhuma para não colocar uma imagem.\nEscreva default para enviar a imagem default.\`\``, username))

                        const c3 = message.channel.createMessageCollector(m => m.author.id === message.author.id, { max: 1, time: 100000})
                            c3.on('collect', msg3 => {
                                //console.log(msg3)
                                //console.log(msg3.url)
                                //console.log(msg3.attachments)
                                //-> console.log(msg3.attachments.first().url)
                                //console.log(msg3.attachments.url)
                                //console.log(msg3.attachments.MessageAttachment.url)

                                let img = msg3.content || msg3.attachments.first().url
                                if(img === "default") img = "https://images-ext-1.discordapp.net/external/9c7EO5u9nkYAuu0a5Lz60bXl4AQkOkZeP8tF3z_vlVs/%3Fsize%3D2048/https/cdn.discordapp.com/icons/494909323550654465/76f1b56bb1e9be699ba6ee74a2cb0921.png"
                                if(img === "nenhuma") img = null
                                if(img === "cancelar") return message.channel.send(`Anúncio cancelado.`)

                                let embed = new discord.MessageEmbed()
                                .setTitle(titulo)
                                .setDescription(description)
                                .setThumbnail(img)
                                .setColor(config.cores.roxo_escuro)

                                message.channel.send(embed).then(async msg4 => {
                                    await msg4.react('✅')
                                    msg4.react('❎')

                                    const filter = (reaction, user) => {
                                        return /*reaction.emoji.name === '👍' &&*/ user.id === message.author.id;
                                    };
                                    
                                    const ec1 = msg4.createReactionCollector(filter, { max: 1 });
                                
                                    ec1.on('collect', (reaction, user) => {
                                        //console.log(reaction)
                                        if(reaction.emoji.name === '✅'){
                                            message.channel.send(`Anúncio enviado com sucesso!`)
                                            canal.send(embed)
                                        } else return message.channel.send(`Anúncio cancelado.`)
                                        //console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
                                    });

                                })

                            })
                                })
            }
        })
}