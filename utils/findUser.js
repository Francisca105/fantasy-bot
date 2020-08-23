const fh = require('../index.js')

module.exports.findUser = (USER, message) => {
    let user = message.mentions.members.first() || message.guild.members.cache.get(USER) || message.guild.members.cache.find(us => us.user.username === USER) 

    if(!user) return null;
    else return user;
}