client.on("raw", async dados => {    
    if(dados.t !== "MESSAGE_REACTION_ADD") return
    if(dados.d.user_id === client.user.id) return;
    if(dados.d.message_id != "689896625597972498") return console.log('Não é essa a msg de ticket')
  
    let discord = require('discord.js')
    let servidor = client.guilds.get("494909323550654465")
    let membro = servidor.members.get(dados.d.user_id)
    let member = membro.user
    let name = member.username
    let discriminator = member.discriminator
    const categoryId = "688051351871291393"

    let abc = (servidor.channels.forEach((channel) => channel.name == name.toLowerCase() + "-" + discriminator))

    if(servidor.channels.has(name, {name: name.toLowerCase() + "-" + discriminator})) return client.channels.get('688051751265632320').send(member + ' Já tem um ticket aberto!').then(msg =>{msg.delete(2000)})
    if(!categoryId) return console.log("ERRO: A categoria de tickets não existe.")
    if(abc) return client.channels.get('688051751265632320').send(member + ' Já tem um ticket aberto!').then(msg =>{msg.delete(2000)})
    
    if(servidor.channels.find(c => c.name === `${name.toLowerCase()}-de-${discriminator}`)) return console.log("?")
    if(dados.t === "MESSAGE_REACTION_ADD"){
        if(dados.d.emoji.id === "688051406388592751") {

            let Parceria = new discord.RichEmbed()
            .setTitle("Ticket")
            .setColor("#f55142")
            .setDescription("O seu ticket do departamento \"Parceria\" foi aberto.\nColoca aqui a tua dúvida!" )
            servidor.createChannel(name.toLowerCase() + "-" + discriminator, "text").then((a) => { 
                    a.setParent(categoryId)
                    a.overwritePermissions(servidor.roles.find('name', "[⚡] SUPORTE(S)"), { "READ_MESSAGES": true });
                    a.overwritePermissions(servidor.roles.find('name', "@everyone"), { "READ_MESSAGES": false });
                    a.overwritePermissions(membro, {
                        "READ_MESSAGES": true, "SEND_MESSAGES": true,
                        "ATTACH_FILES": true, "CONNECT": true,
                        "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
                     });
                    a.send(Parceria)
                    }).then(client.channels.get('688051751265632320').send(member + ' O seu ticket foi aberto!').then(msg =>{msg.delete(2000)}))}
    else if(dados.d.emoji.id === "688051406317420579"){
            let tecn = new discord.RichEmbed()
            .setTitle("Ticket")
            .setColor("#32e3da")
            .setDescription("O seu ticket do departamento \"Técnico\" foi aberto.\nColoca aqui a tua dúvida!" )
            servidor.createChannel(name.toLowerCase() + "-" + discriminator, "text").then((bax) => { 
                    bax.setParent(categoryId)
                    bax.overwritePermissions(servidor.roles.find('name', "[⚡] SUPORTE(S)"), { "READ_MESSAGES": true });
                    bax.overwritePermissions(servidor.roles.find('name', "@everyone"), { "READ_MESSAGES": false });
                    bax.overwritePermissions(membro, {
                        "READ_MESSAGES": true, "SEND_MESSAGES": true,
                        "ATTACH_FILES": true, "CONNECT": true,
                        "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
                     });
                    bax.send(tecn)
                    }).then(client.channels.get('688051751265632320').send(member + ' O seu ticket foi aberto!').then(msg =>{msg.delete(2000)}))
                        
        }else if(dados.d.emoji.name === "🤔"){

            let duv = new discord.RichEmbed()
            .setTitle("Ticket")
            .setColor("#fcf117")
            .setDescription("O seu ticket do departamento \"Dúvida\" foi aberto.\nColoca aqui a tua dúvida!" )
            servidor.createChannel(name.toLowerCase() + "-" + discriminator, "text").then((ba) => { 
                    ba.setParent(categoryId)
                    ba.overwritePermissions(servidor.roles.find('name', "[⚡] SUPORTE(S)"), { "READ_MESSAGES": true });
                    ba.overwritePermissions(servidor.roles.find('name', "@everyone"), { "READ_MESSAGES": false });
                    ba.overwritePermissions(membro, {
                        "READ_MESSAGES": true, "SEND_MESSAGES": true,
                        "ATTACH_FILES": true, "CONNECT": true,
                        "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
                     });
                    ba.send(duv)
                    }).then(client.channels.get('688051751265632320').send(member + ' O seu ticket foi aberto!').then(msg =>{msg.delete(2000)}))

        }else if(dados.d.emoji.name === "🌐"){

            let sub = new discord.RichEmbed()
            .setTitle("Ticket")
            .setColor("#1515d4")
            .setDescription("O seu ticket do departamento \"Subdomínio\" foi aberto.\nColoca aqui a tua dúvida!" )
            servidor.createChannel(name.toLowerCase() + "-" + discriminator, "text").then((c) => { 
                    c.setParent(categoryId)
                    c.overwritePermissions(servidor.roles.find('name', "[⚡] SUPORTE(S)"), { "READ_MESSAGES": true });
                    c.overwritePermissions(servidor.roles.find('name', "@everyone"), { "READ_MESSAGES": false });
                    c.overwritePermissions(membro, {
                        "READ_MESSAGES": true, "SEND_MESSAGES": true,
                        "ATTACH_FILES": true, "CONNECT": true,
                        "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
                     });
                    c.send(sub)
                    }).then(client.channels.get('688051751265632320').send(member + ' O seu ticket foi aberto!').then(msg =>{msg.delete(2000)}))

        }else if(dados.d.emoji.name === "💲"){

            let fin = new discord.RichEmbed()
            .setTitle("Ticket")
            .setColor("#51d422")
            .setDescription("O seu ticket do departamento \"Suporte financeiro\" foi aberto.\nColoca aqui a tua dúvida!" )
            servidor.createChannel(name.toLowerCase() + "-" + discriminator, "text").then((d) => { 
                    d.setParent(categoryId)
                    d.overwritePermissions(servidor.roles.find('name', "[⚡] SUPORTE(S)"), { "READ_MESSAGES": true });
                    d.overwritePermissions(servidor.roles.find('name', "@everyone"), { "READ_MESSAGES": false });
                    d.overwritePermissions(membro, {
                        "READ_MESSAGES": true, "SEND_MESSAGES": true,
                        "ATTACH_FILES": true, "CONNECT": true,
                        "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
                     });
                    d.send(fin)
                    }).then(client.channels.get('688051751265632320').send(member + ' O seu ticket foi aberto!').then(msg =>{msg.delete(2000)}))
        }}})