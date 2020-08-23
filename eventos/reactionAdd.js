const config = require("../config.json");
const fh = require('../index')
const Ticket = require("../tabelas/Ticket")
const discord = require('discord.js')

fh.on("messageReactionAdd", async (reaction, user) => {
    return
    if(user.bot) return;
    if(reaction.emoji.name === '🤔') {
        let findTicket = await Ticket.findOne({ where: { authorId: user.id, resolved: false }}).catch(err => console.log(err));
        if(findTicket) {
            user.send("Já tens um ticket aberto!");
        }
        else {
            console.log("A criar o ticket.")
            try {
                console.log("Criando o ticket.");
                let channel = await reaction.message.guild.channels.create('ticket', { 
                    type: 'text', 
                    permissionOverwrites: [
                        {
                            allow: 'VIEW_CHANNEL',
                            id: user.id
                        },
                        {
                            allow: 'VIEW_CHANNEL',
                            id: '494919254789849098'
                        },
                        {
                            deny: 'VIEW_CHANNEL',
                            id: reaction.message.guild.id
                        }
                    ]
                });
                
                // Create Embed Message and send it to channel.
                let embed = new discord.MessageEmbed();
                embed.setTitle(`Ticket`);
                embed.setDescription("O seu ticket do departamento \"Dúvida\" foi aberto.\nColoca aqui a tua dúvida!\n\`\`Ao reagires a esta mensagem, o ticket é fechado.\`\`");
                embed.setColor("#00FF4D");
                embed.setTimestamp();
                embed.setFooter('Fantasy Hosting ©')

                let msg = await channel.send(embed);
                await msg.react('✅');
                msg.pin()

                let newTicket = await Ticket.create({
                    authorId: user.id,
                    channelId: channel.id,
                    guildId: reaction.message.guild.id,
                    resolved: false,
                    closeMessageId: msg.id
                });
                console.log("Ticket salvo...");
                let ticketId = String(newTicket.dataValues.ticketId).padStart(4, "0");
                await channel.setParent('688051351871291393')
                await channel.edit({ name: `${channel.name}-${ticketId}`});
            }
            catch(ex) {
                console.log(ex);
            } 
        }
    }

    if(reaction.emoji.name === 'parceria') {
        let findTicket = await Ticket.findOne({ where: { authorId: user.id, resolved: false }}).catch(err => console.log(err));
        if(findTicket) {
            user.send("Já tens um ticket aberto!");
        }
        else {
            console.log("A criar o ticket.")
            try {
                console.log("Criando o ticket.");
                let channel = await reaction.message.guild.channels.create('ticket', { 
                    type: 'text', 
                    permissionOverwrites: [
                        {
                            allow: 'VIEW_CHANNEL',
                            id: user.id
                        },
                        {
                            allow: 'VIEW_CHANNEL',
                            id: '494919254789849098'
                        },
                        {
                            deny: 'VIEW_CHANNEL',
                            id: reaction.message.guild.id
                        }
                    ]
                });

                // Create Embed Message and send it to channel.
                let par = new discord.MessageEmbed()
                .setTitle(`Ticket`)
                .setDescription("O seu ticket do departamento \"Parceria\" foi aberto.\nColoca aqui a tua dúvida!\n\`\`Ao reagires a esta mensagem, o ticket é fechado.\`\`" )
                .setColor("#00FF4D")
                .setTimestamp()
                .setFooter('Fantasy Hosting ©')
                let pa = await channel.send(par);
                await pa.react('✅');
                pa.pin()
                let newTicket = await Ticket.create({
                    authorId: user.id,
                    channelId: channel.id,
                    guildId: reaction.message.guild.id,
                    resolved: false,
                    closeMessageId: pa.id
                });
                console.log("Ticket salvo...");
                let ticketId = String(newTicket.dataValues.ticketId).padStart(4, "0");
                await channel.setParent('688051351871291393')
                await channel.edit({ name: `${channel.name}-${ticketId}`});
            }
            catch(ex) {
                console.log(ex);
            } 
        }
    }    

    if(reaction.emoji.name === '🌐') {
        let findTicket = await Ticket.findOne({ where: { authorId: user.id, resolved: false }}).catch(err => console.log(err));
        if(findTicket) {
            user.send("Já tens um ticket aberto!");
        }
        else {
            console.log("A criar o ticket.")
            try {
                console.log("Criando o ticket.");
                let channel = await reaction.message.guild.channels.create('ticket', { 
                    type: 'text', 
                    permissionOverwrites: [
                        {
                            allow: 'VIEW_CHANNEL',
                            id: user.id
                        },
                        {
                            allow: 'VIEW_CHANNEL',
                            id: '494919254789849098'
                        },
                        {
                            deny: 'VIEW_CHANNEL',
                            id: reaction.message.guild.id
                        }
                    ]
                });
                
                // Create Embed Message and send it to channel.
                let sub = new discord.MessageEmbed()
                .setTitle(`Ticket`)
                .setDescription("O seu ticket do departamento \"Subdomínio\" foi aberto.\nColoca aqui a tua dúvida!\n\`\`Ao reagires a esta mensagem, o ticket é fechado.\`\`")
                .setColor("#00FF4D")
                .setTimestamp()
                .setFooter('Fantasy Hosting ©')
                let su = await channel.send(sub);
                await su.react('✅');
                su.pin()
                let newTicket = await Ticket.create({
                    authorId: user.id,
                    channelId: channel.id,
                    guildId: reaction.message.guild.id,
                    resolved: false,
                    closeMessageId: su.id
                });
                console.log("Ticket salvo...");
                let ticketId = String(newTicket.dataValues.ticketId).padStart(4, "0");
                await channel.setParent('688051351871291393')
                await channel.edit({ name: `${channel.name}-${ticketId}`});
            }
            catch(ex) {
                console.log(ex);
            } 
        }
    }
    if(reaction.emoji.name === 'tecnico') {
        let findTicket = await Ticket.findOne({ where: { authorId: user.id, resolved: false }}).catch(err => console.log(err));
        if(findTicket) {
            user.send("Já tens um ticket aberto!");
        }
        else {
            console.log("A criar o ticket.")
            try {
                console.log("Criando o ticket.");
                let channel = await reaction.message.guild.channels.create('ticket', { 
                    type: 'text', 
                    permissionOverwrites: [
                        {
                            allow: 'VIEW_CHANNEL',
                            id: user.id
                        },
                        {
                            allow: 'VIEW_CHANNEL',
                            id: '494919254789849098'
                        },
                        {
                            deny: 'VIEW_CHANNEL',
                            id: reaction.message.guild.id
                        }
                    ]
                });

                // Create Embed Message and send it to channel.
                let tec = new discord.MessageEmbed()
                .setTitle(`Ticket`)
                .setDescription("O seu ticket do departamento \"Técnico\" foi aberto.\nColoca aqui a tua dúvida!\n\`\`Ao reagires a esta mensagem, o ticket é fechado.\`\`" )
                .setColor("#00FF4D")
                .setTimestamp()
                .setFooter('Fantasy Hosting ©')
                let te = await channel.send(tec);
                await te.react('✅');
                te.pin()
                let newTicket = await Ticket.create({
                    authorId: user.id,
                    channelId: channel.id,
                    guildId: reaction.message.guild.id,
                    resolved: false,
                    closeMessageId: te.id
                });
                console.log("Ticket salvo...");
                let ticketId = String(newTicket.dataValues.ticketId).padStart(4, "0");
                await channel.setParent('688051351871291393')
                await channel.edit({ name: `${channel.name}-${ticketId}`});
            }
            catch(ex) {
                console.log(ex);
            } 
        }
    }
    if(reaction.emoji.name === '💰') {
        let findTicket = await Ticket.findOne({ where: { authorId: user.id, resolved: false }}).catch(err => console.log(err));
        if(findTicket) {
            user.send("Já tens um ticket aberto!");
        }
        else {
            console.log("A criar o ticket.")
            try {
                console.log("Criando o ticket.");
                let channel = await reaction.message.guild.channels.create('ticket', { 
                    type: 'text', 
                    permissionOverwrites: [
                        {
                            allow: 'VIEW_CHANNEL',
                            id: user.id
                        },
                        {
                            allow: 'VIEW_CHANNEL',
                            id: '494919254789849098'
                        },
                        {
                            deny: 'VIEW_CHANNEL',
                            id: reaction.message.guild.id
                        }
                    ]
                });

                // Create Embed Message and send it to channel.
                let fin = new discord.MessageEmbed()
                .setTitle(`Ticket`)
                .setDescription("O seu ticket do departamento \"Suporte financeiro\" foi aberto.\nColoca aqui a tua dúvida!\n\`\`Ao reagires a esta mensagem, o ticket é fechado.\`\`")
                .setColor("#00FF4D")
                .setTimestamp()
                .setFooter('Fantasy Hosting ©')

                let fi = await channel.send(fin);
                await fi.react('✅');
                fi.pin()
                let newTicket = await Ticket.create({
                    authorId: user.id,
                    channelId: channel.id,
                    guildId: reaction.message.guild.id,
                    resolved: false,
                    closeMessageId: fi.id
                });
                console.log("Ticket salvo...");
                let ticketId = String(newTicket.dataValues.ticketId).padStart(4, "0");
                await channel.setParent('688051351871291393')
                await channel.edit({ name: `${channel.name}-${ticketId}`});
            }
            catch(ex) {
                console.log(ex);
            } 
        }
    }            
    else if(reaction.emoji.name === "✅") {
        let embeds = reaction.message.embeds;
        if(embeds.length !== 1) {
            console.log("Mensagem incorreta.");
            return;
    }
    if(embeds[0].title === 'Ticket') {
        try {
            let tickets = await Ticket.update({ resolved: true }, { where: { closeMessageId: reaction.message.id }});
            let findTicket = await Ticket.findOne({ where: { closeMessageId: reaction.message.id }});
            let channel = reaction.message.channel;
            let updatedChannel = await channel.delete(15000).then(console.log('Ticket deletado.'))
        }
            catch(ex) {
                console.log(ex);
            }
        }
    }
})