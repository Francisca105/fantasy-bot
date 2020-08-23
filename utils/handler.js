const fh = require("../index.js")
const Discord = require("discord.js")
const fs = require("fs")

fh.commands = new Discord.Collection()
fh.aliases = new Discord.Collection()

module.exports.loadCommands = () => {
    fs.readdir("./cmds", (err, files) => {
        if (err) return console.log(err)
        let file = files.filter(f => f.split('.').pop() === "js")

        file.forEach(f => {
            let prop = require(`../cmds/${f}`)
            fh.commands.set(prop.command.name, prop)
            if (prop.command.aliases) {
                prop.command.aliases.forEach(a => {
                    fh.aliases.set(a, prop.command.name)
                })
            }
        })
    })
}

module.exports.loadEvents = () => {
    fs.readdir("./eventos", (err, files) => {
        if (err) return console.log(err)
        let file = files.filter(f => f.split('.').pop() === "js")

        file.forEach(f => {
            let prop = require(`../eventos/${f}`)
        })
    })
}

