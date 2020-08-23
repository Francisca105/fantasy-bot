const request = require("request")

module.exports.command = {
    name: "status",
    aliases: ["status", "st", "ss", "online", "server", "servidores", "nodes", "sites", "site", "sstatus", "maquinas", "maquina", "máquina"],
    description: "Envia uma mensagem com o status dos nodes e dos sites da fantasy.",
    category: "Hospedagem",
    usage: "status"
}

exports.run = async (fh, message, args) => {
    return message.channel.send(`Comando em manutenção.`)

    const request = require('request'),
    discord = require('discord.js'),
    config = require('../config.json'),
    sites = config.hospedagem.links,
    site = sites.site,
    mcpainel1 = sites.mcpainel1,
    mcpainel2 = sites.mcpainel2

    let sSITE, sMCPAINEL1, sMCPAINEL2

    request("https://fantasyhosting.com.br:80", function (error, response, body) {
        //console.error('error:', error); 
        //console.log('statusCode:', response && response.statusCode);
        //console.log('body:', body);
        if(response && response.statusCode === 200) sSITE = true
        else sSITE = false;

        request(mcpainel1, function (error, response, body) {
            if(response && response.statusCode === 200) sMCPAINEL1 = true
            else sMCPAINEL1 = false
            
            request(mcpainel2, function (error, response, body) {
                if(response && response.statusCode === 200) sMCPAINEL2 = true
                else sMCPAINEL2 = false

                console.log('STATUS\nSITE:' + sSITE)
                console.log('MCPAINEL1: ' + sMCPAINEL1)
                console.log('MCPAINEL2: ' + sMCPAINEL2)
                
        });
    });
});
}
