const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var request = require("request")
    var MCIP = args.slice(0).join(" ");
    var MCPORTA = args.slice(0).join(":");

    var url = "http://mcapi.us/server/status?ip=" + MCIP + "&port" + MCPORTA

    request(url, function(err, response, body){
        if(err) console.log(err)
    })
    body = JSON.parse(body)

    var status = `O servidor ${MCIP}:${MCPORTA} está offline.`

    if(body.online) {
        status = `O servidor ${MCIP}:${MCPORTA} está online.`

        if(body.players.now){
            status += `\nTem ${body.players.now} jogadores online.`
        } else {
            status += ` Nínguem está a jogar no servidor.`
        }
    }
    message.reply(status)
}