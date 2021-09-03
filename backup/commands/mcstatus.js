const Discord = require("discord.js");
const axios = require('axios')

module.exports.run = async (client, message, args) => {
    var ip = args.slice(0, 1)
    if(!args[0]) {
        message.reply('Por favor insira um IP.')
        return;
    }

    var base64Img = require('base64-img');


    var url = 'https://api.mcsrvstat.us/2/' + ip
    axios.get(url)
    .then(function (response) {

        if(!response.data.online) {
            message.channel.send('Este servidor está offline.')
            return;
        }
        var replace = `${response.data.hostname}`.replace('undefined', 'Não há um ip reverso')
        var replace3 = `${response.data.motd.clean}`.replace(',', ' ')
        var software = `${response.data.software}`.replace('undefined', 'Não Identificado')

    
        if(!response.data.icon) {
            let embed2 = new Discord.RichEmbed()

        .setTitle('SERVER STATUS')
        .setColor('#36393e')
        .setDescription(`MOTD: ${replace3}\n\nSOFTWARE: ${software}  \n\nVERSION: ${response.data.version} \n\n IP: ${response.data.ip}:${response.data.port} \n\nREVERSE IP: ${replace} \n\n PLAYERS: ${response.data.players.online}/${response.data.players.max}`)
        .setFooter('Server Status by xLucazzz')
        .setTimestamp()

        message.channel.send(embed2)
        return;
        }

        if(isNaN(ip)) {
            var data1 = response.data.icon
            var replace1 = `${ip}`.replace(":", "")
            base64Img.img(`${data1}`, 'icons', `${replace1}`, function(err, filepath) {});
            var attachment1 = new Discord.Attachment(`./icons/${replace1}.png`, `${replace1}.png`);
            var software1 = `${response.data.software}`.replace('undefined', 'Não Identificado')


            let embed3 = new Discord.RichEmbed()

            .setTitle('SERVER STATUS')
            .setColor('#36393e')
            .setThumbnail(`attachment://${replace1}.png`)
            .attachFile(attachment1)
            .setDescription(`MOTD: ${replace3} \n\nSOFTWARE: ${software1} \n\nVERSION: ${response.data.version} \n\n IP: ${response.data.ip}:${response.data.port} \n\nREVERSE IP: ${replace} \n\n PLAYERS: ${response.data.players.online}/${response.data.players.max}`)
            .setFooter('Server Status by xLucazzz')
            .setTimestamp()

            message.channel.send(embed3)

            return;
            
            } else {



    let embed = new Discord.RichEmbed()

    .setTitle('SERVER STATUS')
    .setColor('#36393e')
    .setThumbnail(`attachment://${ip}.png`)
    .attachFile(attachment)
    .setDescription(`MOTD: ${replace3} \n\nSOFTWARE: ${software1} \n\nVERSION: ${response.data.version} \n\n IP: ${response.data.ip}:${response.data.port} \n\nREVERSE IP: ${replace} \n\n PLAYERS: ${response.data.players.online}/${response.data.players.max} \n\n PLUGINS: ${response.data.plugins.names}`)
    .setFooter('Server Status by xLucazzz')
    .setTimestamp()

    message.channel.send(embed)
            }

})
.catch(function (error) {
    console.log(error);
});

  
}

module.exports.config = {
    name: 'mcresolver',
    aliases: ["server"]
  }