const Discord = require("discord.js")
const shell = require('shelljs');
exports.run = async (client, message, args) => {
    let dependencia = args[0]
    if(!dependencia) return message.reply('Vou baixar o quê???')
    shell.exec("npm i " + dependencia)

}