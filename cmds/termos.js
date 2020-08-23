module.exports.command = {
    name: "termos",
    aliases: ["termo", "clausula", "reembolso", "blacklist"],
    description: "Página de informações da hospedagem.",
    category: "Informação",
    usage: "hostinfo"
}

exports.run = async (fh, message, args) => {
    const discord = require('discord.js')
    const config = require('../config.json')

    let titulos = ['1. A empresa', '2. Conteúdo não permitido', '3. Uso de Hardware Minecraft/MTA/BotJS/Site/MC:PE', '4. Uso de Hardware VPS', "5. Revenda cPanel & WHM/Revenda de VPS/Dedicados", "6. Proteção Anti-DDOS", "7. Arquivos e Backups", "8. Suporte ao Cliente", "9. Prazo de Entrega", "10. Politica de Reembolso", "11. Politica de Privacidade", "12. Suspensão e Cancelamento", "13. Encerramento de Contrato", "14. Abertura de disputa", "15. BlackList", "16. Serviços", "17. Alterações aos termos", "18. Acréscimo por downtime", "19. Consequências", "20. Política de Serviços Gratuitos"]
    
        

    let ver = args[0]
    if(!ver) {
        let embed = new discord.MessageEmbed()
        .setTitle(`Termos`)
        .setDescription(titulos.join('\n'))
        .setColor(config.cores.amarelo_torrado)
        .setFooter(`${message.author.username} ${config.textos.footer}`)

        message.channel.send(embed)
    }else{
        if(0 < ver && ver <= 20){

            let Ever = new discord.MessageEmbed()
            .setTitle(config.hospedagem.termos.titulos[ver])
            .setDescription(config.hospedagem.termos.termos[ver])
            .setFooter(`Revisto a ${config.hospedagem.termos.data} ${config.textos.footer}`)
            .setColor('RANDOM')

            message.channel.send(Ever)
        }else return message.channel.send(`Escolha um número entre 1 e 20 para ver os termos!`)
    }
}