module.exports.command = {
    name: "help",
    aliases: ["ajuda", "?", "comandos", "commands", "cmds"],
    description: "Envia todos os meus comandos ou dá informações de um comando específico.",
    category: "Informação",
    usage: "help (comando)"
}

exports.run = async (fh, message, args) => {
    const Discord = require("discord.js")
    let commandSize = 0
    let embed = new Discord.MessageEmbed().setColor("RANDOM")

    if (!args[0]) {
        let categories =
            fh.commands
                .map(c => c.command.category)
                .reduce((a, b) => {
                    if (a.indexOf(b) < 0) a.push(b)
                    return a
                }, []).sort()

        embed.setAuthor('Ajuda', fh.user.avatarURL)

        categories.forEach(c => {
            let commands = fh.commands.filter(
                command => command.command.category == c
            )
            commands = commands.map(cmd => cmd.command.name)
            if (commands.length <= 0) return;
            commandSize += commands.length
            embed.addField(c, `\`${commands.sort().join("`, `")}\``)
        })
        embed.setFooter(fh.user.username)

        return message.channel.send(embed)
    } else {
        let command = fh.commands.get(args[0])
        if (!command) return message.reply('não encontrei esse comando na minha lista de comandos!')
        command = command.command
        embed.setAuthor('Ajuda para o comando ' + command.name, fh.user.avatarURL)
        embed.setDescription(command.description)
        if (command.aliases.length >= 1) embed.addField('Aliases ', `\`${command.aliases.join("`, `")}\``)
        if (command.usage != null) embed.addField('Como usar ', command.usage)

        return message.channel.send(embed)
    }
}