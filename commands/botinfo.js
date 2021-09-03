const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let embed = new Discord.RichEmbed()
    .setColor([113, 149, 100])
    .setAuthor("Informações sobre o Bot", client.user.avatarURL)
    .setDescription("Servidor da criadora [aqui](https://discord.gg/ugf3WXn)!")
    .addField("Servidores", ":desktop: " + client.guilds.size, true)
    .addField("Membros", ":joystick: " + client.users.size, true)
    .addField("Canais", ":page_facing_up: " + client.channels.size, true)
    .addField("Versão do Bot", "v2.0.0", true)
    .addField("Versão do Node.js", ":trident: " + process.version, true)    
    .addField("Fui criado no dia", ":calendar: " + client.user.createdAt)
    .addField("Jogando:", ":joystick: " + `${client.user.presence.game ? client.user.presence.game.name : 'Não estou a jogar'}`)
    .addField("Status", ":watch: " + `${client.user.presence.status}`)
    .addField("Pais", ":flag_pt: Portugal", true)
    .addField("Recursos", ":books: discord.js", true)
    .setFooter(message.author.username + " • Fantasy Hosting")
    .setTimestamp();

  message.channel.send(embed);

} 