const Discord = require('discord.js')
 
exports.run = async (client, message, args) => {

        const helpinicial = new Discord.RichEmbed()
            .setTitle(`*Atendimento*`)
            .setColor("0x0000FF")
            .setDescription("Reaja com um dos seguintes emojis para criar um ticket com uma categoria específica.\n\n🤔> Atendimento sobre dúvida.\n<:parceria:688051406388592751>> Para solicitar parceria/patrocínio.\n🌐> Solicitação subdomínio.\n<:tecnico:688051406317420579>> Atendimento ao suporte técnico.\n💲> Atendimento ao suporte financeiro.")
            .setFooter(message.author.tag, client.user.avatarURL)

        message.channel.send(helpinicial).catch(e => message.channel.send(helpinicial))
            .then(async (msg) => {
                await msg.react("🤔")
                })
                message.delete()
}