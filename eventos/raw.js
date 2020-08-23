const fh = require('../index')
const discord = require('discord.js')
const config = require('../config.json')
const Ticket = require("../tabelas/Ticket")

fh.on('raw', async payload => {
    return
    let eventName = payload.t;
    if(eventName === 'MESSAGE_REACTION_ADD') {
        let msgId = payload.d.message_id;
        if(msgId === '689896625597972498') {
            let channelId = payload.d.channel_id;
            let channel = fh.channels.cache.get(channelId);
            if(channel) {
                if(channel.messages.cache.has(msgId))
                    return;
                else {
                    try {
                        let msg = await channel.messages.fetch(msgId);
                        let tecnico = fh.guilds.cache.get('494909323550654465').emojis.cache.find(e => e.name === "tecnico")
                        let parceria = fh.guilds.cache.get('494909323550654465').emojis.cache.find(e => e.name === "parceria")

                        let reaction = msg.reactions.cache.get('🤔') || msg.reactions.cache.get('🌐') || msg.reactions.cache.get(tecnico) || msg.reactions.cache.get('💰') || msg.reaction.get(parceria)
                        let user = fh.users.cache.get(payload.d.user_id);
                        reaction.remove(user)
                        fh.emit('messageReactionAdd', reaction, user);
                    }
                    catch(ex) {
                        console.log(ex);
                        return;
                    }
                }
            }
        } else if(payload.d.emoji.name === '✅') {
            try{
                let findTicket = await Ticket.findOne({ where: { closeMessageId: msgId }});
                if(findTicket){
                    let channelId = payload.d.channel_id;
                    let channel = fh.channels.cache.get(channelId);
                    if(channel) {
                        if(channel.messages.cache.has(msgId))
                            return;
            else {
                    try {
                        let msg = await channel.messages.fetch(msgId);
                        let reaction = msg.reactions.cache.get('✅');
                        let user = fh.users.cache.get(payload.d.user_id);
                        reaction.ticket = findTicket;
                        fh.emit('messageReactionAdd', reaction, user);
                    }
                    catch(ex) {
                        console.log(ex);
                        return;
                    }                        
                }
            }
        }                
        else {
            console.log("Ticket não encontrado");
        }
    }
    catch(ex) {
        console.log(ex);
    }
}
    }
})