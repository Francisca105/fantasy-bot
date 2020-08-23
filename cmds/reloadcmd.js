module.exports.command = {
    name: "reloadcmd",
    aliases: ["rlcmd", "cmdrl", "comandorl", "reload", "rl"],
    description: "Reinicia um comando!",
    category: "Moderação",
    usage: "reloadcmd (comando)"
}

exports.run = async (bot, message, args, err) => {
    const {dona} = require('../config.json')
    const fs = require('fs')

    if(message.author.id !== dona) return message.reply('Este comando só pode ser executado pela developer!!!')
    let cmdnome = args[0]

    if(!cmdnome) return message.reply('Indica o comando para recarregar!')

    //message.delete()
    let cmdTLC = cmdnome.toLowerCase()
   
    try{
        fs.readdir("../commands", (err, files)=>{
            delete require.cache[require.resolve(`./${cmdTLC}.js`)]
            bot.commands.delete(cmdTLC)
            const pull = require(`./${cmdTLC}.js`)
            bot.commands.set(cmdTLC, pull)
        })
        
    } catch (e) {
        return message.channel.send('O comando ' + cmdTLC +  ` não foi recarregado pelo erro: \n ${e}`).then(a=> a.delete(15000))
    }
    message.channel.send('Comando ' + cmdTLC + ' recarregado com sucesso!').then(b=> b.delete(15000))
    message.delete()
}