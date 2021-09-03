const Discord = require('discord.js')

exports.run = function(bot, message){
    message.channel.send(new Discord.RichEmbed()
    .setColor("PURPLE")
    .setTitle('A moeda foi ao ar e caiu... ' + coinFlipMagic())
    .setFooter(message.author.username + " • Fantasy Hosting")
    .setTimestamp());

    function coinFlipMagic() {
        var rand = ['cara', 'coroa'];

        return rand[Math.floor(Math.random()*rand.length)];
    }
}