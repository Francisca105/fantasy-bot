const fh = require('../index')
const discord = require('discord.js')
const {bot} = require('../config.json')
const config = require('../config.json')

fh.on('message', async message => {
    let prefix = bot.prefix
    if(message.author.fh || message.channel.type === "dm") return;

    let menE  =new discord.MessageEmbed()
    .setTitle(`${fh.emojis.cache.get(config.textos.emojis.ids.certo)} Fantasy Hosting`)
    .setDescription(`**Olá, eu sou o robô oficial da Fantasy Hosting!**\n\nSe tiveres dúvidas relativamente aos nossos serviços, abre um ticket e se queres saber mais sobre mim, faz \`${prefix}botinfo\` e para veres os meus comandos faz \`${prefix}ajuda\`!`)
    .setColor(config.cores.roxo_escuro)
    .setThumbnail(`https://fantasyhosting.com.br/sitezzz/img/logo.png`)
    .setFooter(`O meu prefixo é ${prefix} ${config.textos.footer}`)

    let mention = [`<@${fh.user.id}>`, `<@!${fh.user.id}>`];
    mention.find(mention => {
      if (message.content === mention) {
        message.channel.send(menE)
         }})

    

    if (!message.content.startsWith(prefix)) return;

    let args = message.content.slice(prefix.length).trim().split(/ +/)
    let cmd = args.shift().toLowerCase()

    let command;
    if (fh.commands.has(cmd)) {
        command = fh.commands.get(cmd)
    } else if (fh.aliases.has(cmd)) {
        command = fh.commands.get(fh.aliases.get(cmd))
    } else return

    try {
        command.run(fh, message, args)
    } catch (err) {
        console.log(err)
    }
})