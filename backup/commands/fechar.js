const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 

    const categoryId = "688051351871291393";
 

    if (message.channel.parentID == categoryId) {
 
        message.channel.delete();
 
    } else {
 
        message.channel.send("Por favor, coloque este comando em um canal de ticket.");
 
    }

 
}
 
module.exports.help = {
    name: "fechar",
    description: "Fechar um ticket"
}