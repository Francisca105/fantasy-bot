module.exports.command = {
    name: "addclient",
    aliases: ["clientadd", "client", "cliente", "solicitartag", "solicitar-tag", "ac", "cl"],
    description: "Adiciona o cargo cliente numa pessoa ou solicita a tag.",
    category: "Moderação",
    usage: "addclient <pessoa / print do comprovante>"
}

exports.run = async (fh, message, args) => {
    const discord = require('discord.js')
    const config = require('../config.json')
    const {findUser} = require('../utils/findUser')

    let cargo = config.ids.roles.cliente,
    equipe = config.ids.roles.equipe,
    pedir = config.ids.canais.pedir_tag_cliente,
    svequipe = config.ids.servidores.equipe

    if(message.member.roles.cache.get(equipe)){

    let procurar = args.slice(0).join(' ')
    if(!procurar) return message.channel.send(`Por favor, indique um membro para dar o cargo.`)

    let user = findUser(procurar, message) 
    if(user === null) return message.channel.send('Não encontrei esse usuário.')

        if(user.roles.cache.has(cargo)) {
           return message.channel.send(`O usuário ${user} já tem o cargo.`)
        } else {
            await user.roles.add(cargo).catch((e)=> {
                message.channel.send(`Ocorreu um erro ao adiconar o cargo.`)
                console.log(e)
            })
            message.channel.send(`Cargo adicionado com sucesso a ${user.user.username}!`)
        }
    

    } else if(message.member.roles.cache.get(cargo)){
        return message.channel.send(`Já tens tag cliente e não tens permissão de dar o cargo a outros membros!`)
    } else {
        let print = args.slice(0).join(' ') //|| message.attachments.first().url
        //console.log(print)
        //console.log(message.attachments)
        if(print){

        let Embed = new discord.MessageEmbed()
        .setTitle(`${message.author.username}#${message.author.discriminator} Pediu a tag cliente!`)
        .setDescription(`Print: ${print}`)
        .setImage(print)

        fh.channels.cache.get(pedir).send(Embed)
        message.channel.send(`Aguarde para um staff lhe dar a tag.`)

        }else if(!print) {
            await message.channel.send(`Envie uma print do comprovante/comprovativo para solicitar a tag cliente.`).then(c => {
                c.channel.createMessageCollector(m => m.author.id === message.author.id, { max: 1, time: 100000})
                .on('collect', comprovante => {
                    //console.log(comprovante)
                    print = comprovante.content || comprovante.attachments.first().url
                    
                    if(print = comprovante.content){
                        if(!print.startsWith('https://')) return message.channel.send(`Para pedir a tag precisa de enviar uma print válida!`)  
                    }

                    let mbed = new discord.MessageEmbed()
                        .setTitle(`${message.author.username}#${message.author.discriminator} Pediu a tag cliente!`)
                        .setDescription(`Print: ${print}`)
                        .setImage(print)

                    fh.channels.cache.get(pedir).send(mbed)
                    return message.channel.send(`Aguarde para um staff lhe dar a tag.`)
                    
                })
            })
        }

    }
}