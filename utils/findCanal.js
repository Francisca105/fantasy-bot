const fh = require('../index.js')

module.exports.findCanal = (CANAL, message) => {
    let canal = message.mentions.channels.first() || message.guild.channels.cache.get(CANAL) || message.guild.channels.cache.find(cc => cc.name === CANAL/*, console.log(cc)*/) 

    if(!canal) return null;
    else return canal;
}