exports.run = async (dados, client, database, Discord) => {
   if (dados.t !== "MESSAGE_REACTION_ADD")  return;
   if(dados.d.user_id === client.user.id) return;
  // constantes importantes
  const servidor = client.guilds.get("657008822912679936");
  const membro = servidor.members.get(dados.d.user_id);
  const canal = servidor.channels.get(dados.d.channel_id);
  const msgsemreact = await client.channels.get(dados.d.channel_id).fetchMessage(dados.d.message_id);
  const emoji = dados.d.emoji.id ? `${dados.d.emoji.name}:${dados.d.emoji.id}` : dados.d.emoji.name;
  const reaction = msgsemreact.reactions.get(emoji);
  
  
  //Roles
  const diretor = servidor.members.get("290092310002270218");
  const gerente = servidor.roles.get("497180647643676680");
  const suporte = servidor.roles.get("494919254789849098");
  
  
  
  // Fechar ticket
  if(dados.d.emoji.name === "✅") {
    database.ref(`Fantasy/tickets/canais/${dados.d.channel_id}`)
    .once("value")
    .then(async function(db) {
      if(!db.val()) return;
      if(db.val().donoID === membro.user.id && !membro.hasPermission("ADMINISTRATOR")) return canal.send(new Discord.RichEmbed().setDescription(`🚫 <@${db.val().donoID}>, apenas a staff pode aceitar a parceria.`).setColor("PURPLE")).then(async msg => msg.delete(5000))
    database.ref(`Fantasy/Parceiros/${db.val().tipo}/${db.val().donoID}`)
      .set({
      id: db.val().donoID,
      prova: db.val().prova
    })
      canal.send("Você aceitou com sucesso.");
    })
  }
  if(dados.d.emoji.name === "❌") {
    database.ref(`Fantasy/tickets/canais/${dados.d.channel_id}`)
    .once("value")
    .then(async function(db) {
      if(!db.val()) return;
      if(db.val().donoID === membro.user.id && !membro.hasPermission("ADMINISTRATOR")) return canal.send(new Discord.RichEmbed().setDescription(`🚫 <@${db.val().donoID}>, apenas a staff pode fechar o atendimento,`).setColor("PURPLE")).then(async msg => msg.delete(5000))
      canal.delete()
      const userMensagem = servidor.members.get(db.val().donoID)
      database.ref(`Fantasy/tickets/canais/${db.val().donoID}`)
         .set({
           dono: membro.user.tag,
           donoID: membro.user.id,
           status: "inativo",
           channelID: null
         })
      userMensagem.send(new Discord.RichEmbed().setAuthor("Fantasy Hosting - Atendimento finalizado", client.user.displayAvatarURL).setDescription(`${userMensagem}, seu atendimento acaba de ser fechado por ${membro}.`).setColor("PURPLE").setFooter("Fantasy Hosting - Atendimento finalizado", client.user.displayAvatarURL))
      //Adicionar o cooldown
    database.ref(`Fantasy/cooldown/${db.val().donoID}`)
    .once("value").then(async function(dbxuta) {
    database.ref(`Fantasy/cooldown/${db.val().donoID}`)
    .set({
      minutos: 5,
      segundos: 1
    })
    })
    
      
      setInterval(async function() {
        
       database.ref(`Fantasy/cooldown/${db.val().donoID}`)
    .once("value").then(async function(dbxuta) {
         if(!dbxuta.val()) return;
        database.ref(`Fantasy/cooldown/${db.val().donoID}`)
        if(dbxuta.val().segundos === 1 || dbxuta.val().segundos === 2 || dbxuta.val().segundos === 3) {
          database.ref(`Fantasy/cooldown/${db.val().donoID}`)
          .update({
            minutos: dbxuta.val().minutos - 1,
            segundos: 60
          })
          
          database.ref(`Fantasy/cooldown/${db.val().donoID}`)
        } else {
        database.ref(`Fantasy/cooldown/${db.val().donoID}`)
      .update({
         segundos: dbxuta.val().segundos - 1
      })
          }
        if(dbxuta.val().minutos === 0 && dbxuta.val().segundos === 10) {
          await database.ref(`Fantasy/cooldown/${db.val().donoID}`)
      .update({
        minutos: null,
             segundos: null
      })
        } return;
        })
      }, 1000)
    })
  }  
  
  
  
  
  //Verificar se está no Cooldown
  
  database.ref(`Fantasy/AtendimentosConfiguração`)
  .once("value")
  .then(function(dbMsg) {
  if(dados.d.message_id !== dbMsg.val().msg) return;
  database.ref(`Fantasy/tickets/canais/${membro.user.id}`)
    .once("value")
    .then(async function(db) {
      if (!db.val()) {
                    database.ref(`Fantasy/tickets/canais/${membro.user.id}`)
                        .set({
                            status: "inativo"
                        })
        canal.send(new Discord.RichEmbed().setAuthor("Fantasy Hosting › Central de Atendimentos", client.user.displayAvatarURL).setDescription(`🚫 ${membro}, estou registrando você no meu banco de dados... Reaja novamente para abrir seu atendimento.`).setColor("PURPLE").setFooter(`Fantasy Hosting › Central de Atendimentos`, client.user.displayAvatarURL).setThumbnail(client.user.displayAvatarURL)).then(async msg => {msg.delete(5000)})
                }
      if(db.val().status === "ativo") {
         canal.send(new Discord.RichEmbed().setAuthor("Fantasy Hosting › Central de Atendimentos", client.user.displayAvatarURL).setDescription(`🚫 ${membro}, você já possui um atendimento aberto. \n\n Clique aqui para ir até ele: <#${db.val().channelID}>`).setColor("PURPLE").setFooter("Fantasy Hosting › Central de Atendimentos", client.user.displayAvatarURL)).then(async msg => {msg.delete(5000)})    
         } else {
           database.ref(`Fantasy/cooldown/${db.val().donoID}`)
           .once("value").then(async function (dbamoeba) {
             if (dbamoeba.val()) {
                                canal.send(new Discord.RichEmbed().setAuthor("Fantasy Hosting › Central de Atendimentos", client.user.displayAvatarURL).setDescription(`🚫 ${membro}, você teve um atendimento fechado recenetemente... \n\n Aguarde **${dbamoeba.val().minutos} minutos** e **${dbamoeba.val().segundos} segundos** para abrir outro novamente...`).setColor("PURPLE").setFooter("Fantasy Hosting › Central de Atendimentos", client.user.displayAvatarURL)).then(async msg => {msg.delete(5000)})
                            } else {
                              
                              
                              
                              
                              
                              
                              //Agora a parte dificil...
                              if(dados.d.emoji.name === "🤔") { // chat de dúvidas
                                canal.send("Verifique seu privado, "+membro+".").then(async msg => {msg.delete(5000)})
                                membro.send("Poderia dizer qual é a sua dúvida?").then(async duvida => {
                                  const duvidaa = duvida.channel.createMessageCollector(m => m.author.id === membro.user.id, {time: 6000000, max: 1})
                                  duvidaa.on("collect",async() => {
  const nome = "duvida-de-"+membro.user.username.toLowerCase().split(" ").join("-")
  servidor.createChannel(nome, {type: "text"}).then(async c => {
    database.ref(`Fantasy/tickets/canais/${c.id}`)
         .set({
           dono: membro.user.tag,
           donoID: membro.user.id,
           channelID: c.id
         })
    database.ref(`Fantasy/tickets/canais/${membro.user.id}`)
         .set({
           dono: membro.user.tag,
           donoID: membro.user.id,
           status: "ativo",
           channelID: c.id
         })
    
    membro.send(new Discord.RichEmbed().setAuthor("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL).setDescription(`${membro}, seu atendimento acaba de ser criado. \n\nPara acessá-lo, basta clicar aqui: <#${c.id}>`).setColor("PURPLE").setFooter("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL)).then(async msg => {msg.delete(10000)})
   c.setParent("671030408686862337")
    c.overwritePermissions(diretor, {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true
              });
    c.overwritePermissions(gerente, {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true
              });
    c.overwritePermissions(suporte, {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true
              });
    c.overwritePermissions(servidor.defaultRole, {
                VIEW_CHANNEL: false,
                SEND_MESSAGES: false
              }); 
                                                                       
                c.overwritePermissions(membro, {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true
              });
    c.send(new Discord.RichEmbed().setAuthor("Fantasy Hosting - Categoria selecionada: Dúvidas", client.user.displayAvatarURL).setDescription(`${membro}, seja bem-vindo à categoria \`\`dúvidas\`\` do sistema de atendimentos. \n\n **Sua dúvida é:** ${duvidaa.collected.first().content}`).setColor("PURPLE").setFooter("Fantasy Hosting - Categoria selecionada: Dúvidas", client.user.displayAvatarURL)).then(async msg => {msg.react("❌")})
  })
                                    })
                                  }).catch(err => {canal.send("Habilite suas mensagens privadas para utilizar o atendimento, "+membro+".").then(async msg => {msg.delete(5000)})})
  }
                              
                              
                              
                              if(dados.d.emoji.id === "688550975635718146") { // parceria/patrocínio
                                membro.send(new Discord.RichEmbed().setAuthor("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL).setDescription("Reaja com <:parceria:688550975635718146> caso queira patrocínio usando canal no YT; \n\n Reaja com <:parceria_discord:688761010017796155> caso queira uma parceria entre discord; \n\n Reaja com 🌐 para fazer uma parceria com site.")).then(async msg => {
                                  await msg.react("688550975635718146"); //yt
                                  await msg.react("688761010017796155"); //discord
                                  await msg.react("🌐"); //site
                                   const yt = msg.createReactionCollector((r, u) => (r.emoji.id === "688550975635718146" && u.id !== client.user.id));
                                   const dc = msg.createReactionCollector((r, u) => (r.emoji.id === "688761010017796155" && u.id !== client.user.id));
                                   const site = msg.createReactionCollector((r, u) => (r.emoji.name === "🌐" && u.id !== client.user.id));
                                  yt.on("collect",async() => {
                                     msg.delete()
                                    membro.send("Qual o link do seu canal no YT?").then(async msgCanal => {
                                      const canalLink = msgCanal.channel.createMessageCollector(m => m.author.id !== client.user.id, {max:1, time:6000000});
                                      canalLink.on("collect",async() => {
                                        msgCanal.delete()
                                        membro.send("Como é que tenciona divulgar-nos?").then(async msgTenciona => {
                                          const comoTenciona = msgTenciona.channel.createMessageCollector(m => m.author.id !== client.user.id, {max:1,time:6000000});
                                          comoTenciona.on("collect",async() => {
                                            membro.send("Pretende ganhar o que com a parceria?").then(async msgOqueGanhar => {
                                              const oQue = msgOqueGanhar.channel.createMessageCollector(m => m.author.id !== client.user.id, {max:1,time:6000000});
                                              oQue.on("collect",async() => {
                                                const nome = "patrocinio-de-"+membro.user.username.toLowerCase().split(" ").join("-")
  servidor.createChannel(nome, {type: "text"}).then(async c => {
    database.ref(`Fantasy/tickets/canais/${c.id}`)
         .set({
           dono: membro.user.tag,
           donoID: membro.user.id,
           channelID: c.id,
           tipo: "patrocionio",
           prova: canalLink.collected.first().content
         })
    database.ref(`Fantasy/tickets/canais/${membro.user.id}`)
         .set({
           dono: membro.user.tag,
           donoID: membro.user.id,
           status: "ativo",
           channelID: c.id
         })
    
   c.setParent("671030408686862337")
    c.overwritePermissions(diretor, {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true
              });
    c.overwritePermissions(gerente, {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true
              });
    c.overwritePermissions(servidor.defaultRole, {
                VIEW_CHANNEL: false,
                SEND_MESSAGES: false
              }); 
                                                                       
                c.overwritePermissions(membro, {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true
              });
    membro.send(new Discord.RichEmbed().setAuthor("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL).setDescription(`${membro}, seu atendimento acaba de ser criado. \n\nPara acessá-lo, basta clicar aqui: <#${c.id}>`).setColor("PURPLE").setFooter("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL))
    c.send(new Discord.RichEmbed().setAuthor("Fantasy Hosting - Categoria selecionada: Patrocínio", client.user.displayAvatarURL).setDescription(`${membro}, seja bem-vindo à categoria \`\`patrocínio\`\` do sistema de atendimentos. \n\n **Seu canal é:** [clique aqui](${canalLink.collected.first().content}) \n\n **Como é que tenciona divulgar-nos?:** ${comoTenciona.collected.first().content} \n\n **Pretende ganhar o que com o patrocínio?:** ${oQue.collected.first().content}`).setColor("PURPLE").setFooter("Fantasy Hosting - Categoria selecionada: Patrocínio", client.user.displayAvatarURL)).then(async msg => {await msg.react("❌"); await msg.react("✅")})
  })
                                              })
                                            })
                                          })
                                        })
                                      })
                                    })
                                  })
                                  
                                  
                                  
                                  
                                  
                                  
                                  
                                  
                                  
                                  dc.on("collect",async() => {
                                    msg.delete()
                                    membro.send("Qual o link do seu servidor de Discord?").then(async msgCanal => {
                                      const canalLink = msgCanal.channel.createMessageCollector(m => m.author.id !== client.user.id, {max:1, time:6000000});
                                      canalLink.on("collect",async() => {
                                        msgCanal.delete()
                                        membro.send("Como é que tenciona divulgar-nos?").then(async msgTenciona => {
                                          const comoTenciona = msgTenciona.channel.createMessageCollector(m => m.author.id !== client.user.id, {max:1,time:6000000});
                                          comoTenciona.on("collect",async() => {
                                            membro.send("Pretende ganhar o que com a parceria?").then(async msgOqueGanhar => {
                                              const oQue = msgOqueGanhar.channel.createMessageCollector(m => m.author.id !== client.user.id, {max:1,time:6000000});
                                              oQue.on("collect",async() => {
                                                const nome = "discord-de-"+membro.user.username.toLowerCase().split(" ").join("-")
  servidor.createChannel(nome, {type: "text"}).then(async c => {
    database.ref(`Fantasy/tickets/canais/${c.id}`)
         .set({
           dono: membro.user.tag,
           donoID: membro.user.id,
           channelID: c.id,
           tipo: "discord",
           prova: canalLink.collected.first().content
         })
    database.ref(`Fantasy/tickets/canais/${membro.user.id}`)
         .set({
           dono: membro.user.tag,
           donoID: membro.user.id,
           status: "ativo",
           channelID: c.id
         })
    
   c.setParent("671030408686862337")
    c.overwritePermissions(diretor, {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true
              });
    c.overwritePermissions(gerente, {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true
              });
    c.overwritePermissions(servidor.defaultRole, {
                VIEW_CHANNEL: false,
                SEND_MESSAGES: false
              }); 
                                                                       
                c.overwritePermissions(membro, {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true
              });
    membro.send(new Discord.RichEmbed().setAuthor("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL).setDescription(`${membro}, seu atendimento acaba de ser criado. \n\nPara acessá-lo, basta clicar aqui: <#${c.id}>`).setColor("PURPLE").setFooter("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL))
    c.send(new Discord.RichEmbed().setAuthor("Fantasy Hosting - Categoria selecionada: Parceria", client.user.displayAvatarURL).setDescription(`${membro}, seja bem-vindo à categoria \`\`Parceria de Discord\`\` do sistema de atendimentos. \n\n **Seu servidor de discord é:** [clique aqui](${canalLink.collected.first().content}) \n\n **Como é que tenciona divulgar-nos?:** ${comoTenciona.collected.first().content} \n\n **Pretende ganhar o que com a parceria?:** ${oQue.collected.first().content}`).setColor("PURPLE").setFooter("Fantasy Hosting - Categoria selecionada: Parceria de Discord", client.user.displayAvatarURL)).then(async msg => {await msg.react("❌"); await msg.react("✅")})
  })
                                              })
                                            })
                                          })
                                        })
                                      })
                                    })
                                  })
                                  
                                  
                                  
                                  
                                  
                                  
                                  
                                 site.on("collect",async() => {
                                    msg.delete()
                                    membro.send("Qual o link do seu site?").then(async msgCanal => {
                                      const canalLink = msgCanal.channel.createMessageCollector(m => m.author.id !== client.user.id, {max:1, time:6000000});
                                      canalLink.on("collect",async() => {
                                        msgCanal.delete()
                                        membro.send("Como é que tenciona divulgar-nos?").then(async msgTenciona => {
                                          const comoTenciona = msgTenciona.channel.createMessageCollector(m => m.author.id !== client.user.id, {max:1,time:6000000});
                                          comoTenciona.on("collect",async() => {
                                            membro.send("Pretende ganhar o que com a parceria?").then(async msgOqueGanhar => {
                                              const oQue = msgOqueGanhar.channel.createMessageCollector(m => m.author.id !== client.user.id, {max:1,time:6000000});
                                              oQue.on("collect",async() => {
                                                const nome = "site-de-"+membro.user.username.toLowerCase().split(" ").join("-")
  servidor.createChannel(nome, {type: "text"}).then(async c => {
    database.ref(`Fantasy/tickets/canais/${c.id}`)
         .set({
           dono: membro.user.tag,
           donoID: membro.user.id,
           channelID: c.id,
           tipo: "site",
           prova: canalLink.collected.first().content
         })
    database.ref(`Fantasy/tickets/canais/${membro.user.id}`)
         .set({
           dono: membro.user.tag,
           donoID: membro.user.id,
           status: "ativo",
           channelID: c.id
         })
    
   c.setParent("671030408686862337")
    c.overwritePermissions(diretor, {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true
              });
    c.overwritePermissions(gerente, {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true
              });
    c.overwritePermissions(servidor.defaultRole, {
                VIEW_CHANNEL: false,
                SEND_MESSAGES: false
              }); 
                                                                       
                c.overwritePermissions(membro, {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true
              });
    membro.send(new Discord.RichEmbed().setAuthor("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL).setDescription(`${membro}, seu atendimento acaba de ser criado. \n\nPara acessá-lo, basta clicar aqui: <#${c.id}>`).setColor("PURPLE").setFooter("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL))
    c.send(new Discord.RichEmbed().setAuthor("Fantasy Hosting - Categoria selecionada: Parceria de Site", client.user.displayAvatarURL).setDescription(`${membro}, seja bem-vindo à categoria \`\`Parceria de Site\`\` do sistema de atendimentos. \n\n **Seu site é:** [clique aqui](${canalLink.collected.first().content}) \n\n **Como é que tenciona divulgar-nos?:** ${comoTenciona.collected.first().content} \n\n **Pretende ganhar o que com a parceria?:** ${oQue.collected.first().content}`).setColor("PURPLE").setFooter("Fantasy Hosting - Categoria selecionada: Parceria de Site", client.user.displayAvatarURL)).then(async msg => {await msg.react("❌"); await msg.react("✅")})
  })
                                              })
                                            })
                                          })
                                        })
                                      })
                                    })
                                  })
                                
                                }).catch(err => canal.send("Habilite suas mensagens privadas para utilizar o atendimento, "+membro+"."))
                              }
                              
                              
                              
                              
                              
                              if(dados.d.emoji.name === "🌐") { // subdominio
                                const embedInicial = new Discord.RichEmbed()
                                .setAuthor("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL)
                                .setDescription(`Para solicita um subdomínio, são necessárias algumas informações. Por favor, envie seu nome e sobrenome.

**Informações**:

▫️ Nome e Sobrenome;
▫️ E-mail;
▫️ Ip do servidor;
▫️ Porta do servidor;
▫️ Node (coloque seu node, exemplo: OVH-1);
▫️ Subdomínio: (confira os subdomínios disponíveis em <#688783023365292089>).`)
                                .setColor("PURPLE")
                                .setFooter("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL);
                                membro.send(embedInicial).then(async msg => {
                                  const nome = msg.channel.createMessageCollector(m => m.author.id !== client.user.id, {max:1,time:6000000});
                                  nome.on("collect",async() => {
                                    msg.delete()
                                    const embedNome = new Discord.RichEmbed()
                                    .setAuthor("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL)
                                .setDescription(`Para solicita um subdomínio, são necessárias algumas informações. Envie seu email cadastrado em nosso site.

**Informações**:

▫️ Nome e Sobrenome; <a:certo:678393441037844494>
▫️ E-mail;
▫️ Ip do servidor;
▫️ Porta do servidor;
▫️ Node (coloque seu node, exemplo: OVH-1);
▫️ Subdomínio: (confira os subdomínios disponíveis em <#688783023365292089>).`)
                                .setColor("PURPLE")
                                .setFooter("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL);
                                    membro.send(embedNome).then(async msg2 => {
                                      const email = msg2.channel.createMessageCollector(m => m.author.id !== client.user.id, {max:1,time:6000000});
                                      email.on("collect",async() => {
                                        msg2.delete()
                                        const embedEmail = new Discord.RichEmbed()
                                    .setAuthor("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL)
                                .setDescription(`Para solicita um subdomínio, são necessárias algumas informações. Envie o IP do servidor que deseja o subdomínio.

**Informações**:

▫️ Nome e Sobrenome; <a:certo:678393441037844494>
▫️ E-mail; <a:certo:678393441037844494>
▫️ Ip do servidor;
▫️ Porta do servidor;
▫️ Node (coloque seu node, exemplo: OVH-1);
▫️ Subdomínio: (confira os subdomínios disponíveis em <#688783023365292089>).`)
                                .setColor("PURPLE")
                                .setFooter("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL);
                                        membro.send(embedEmail).then(async msg3 => {
                                          const ip = msg3.channel.createMessageCollector(m => m.author.id !== client.user.id, {max:1,time:6000000});
                                          ip.on("collect",async() => {
                                            msg3.delete()
                                            const embedIp = new Discord.RichEmbed()
                                    .setAuthor("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL)
                                .setDescription(`Para solicita um subdomínio, são necessárias algumas informações. Envie a porta do seu servidor citada em seu painel (ex: 157.5.0.0).

**Informações**:

▫️ Nome e Sobrenome; <a:certo:678393441037844494>
▫️ E-mail; <a:certo:678393441037844494>
▫️ Ip do servidor; <a:certo:678393441037844494>
▫️ Porta do servidor;
▫️ Node (coloque seu node, exemplo: OVH-1);
▫️ Subdomínio: (confira os subdomínios disponíveis em <#688783023365292089>).`)
                                .setColor("PURPLE")
                                .setFooter("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL);
                                            membro.send(embedIp).then(async msg4 => {
                                              const porta = msg4.channel.createMessageCollector(m => m.author.id !== client.user.id, {max:1,time:6000000});
                                            porta.on("collect",async() => {
                                              msg4.delete()
                                              const embedPorta = new Discord.RichEmbed()
                                    .setAuthor("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL)
                                .setDescription(`Para solicita um subdomínio, são necessárias algumas informações. Envie seu node (ex: OVH-1).

**Informações**:

▫️ Nome e Sobrenome; <a:certo:678393441037844494>
▫️ E-mail; <a:certo:678393441037844494>
▫️ Ip do servidor; <a:certo:678393441037844494>
▫️ Porta do servidor; <a:certo:678393441037844494>
▫️ Node;
▫️ Subdomínio.`)
                                .setColor("PURPLE")
                                .setFooter("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL);
                                              membro.send(embedPorta).then(async msg5 => {
                                                const node = msg5.channel.createMessageCollector(m => m.author.id !== client.user.id, {max:1,time:6000000});
                                                node.on("collect",async() => {
                                                  msg5.delete()
                                                  const embedNode = new Discord.RichEmbed()
                                    .setAuthor("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL)
                                .setDescription(`Para solicita um subdomínio, são necessárias algumas informações. Coloque o subdomínio que desejar Verifique os disponíveis em <#672155104690044979>.

**Informações**:

▫️ Nome e Sobrenome; <a:certo:678393441037844494>
▫️ E-mail; <a:certo:678393441037844494>
▫️ Ip do servidor; <a:certo:678393441037844494>
▫️ Porta do servidor; <a:certo:678393441037844494>
▫️ Node; <a:certo:678393441037844494>
▫️ Subdomínio.`)
                                .setColor("PURPLE")
                                .setFooter("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL);
                                                  membro.send(embedNode).then(async msg6 => {
                                                    const sub = msg5.channel.createMessageCollector(m => m.author.id !== client.user.id, {max:1,time:6000000});
                                                    sub.on("collect",async() => {
                                                      const embedTodo = new Discord.RichEmbed()
                                    .setAuthor("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL)
                                .setDescription(`Você enviou todas as informações com sucesso. Reaja abaixo com <a:certo:678393441037844494> para confirmar e abrir a sala de solicitação.

**Informações**:

▫️ Nome e Sobrenome; <a:certo:678393441037844494>
▫️ E-mail; <a:certo:678393441037844494>
▫️ Ip do servidor; <a:certo:678393441037844494>
▫️ Porta do servidor; <a:certo:678393441037844494>
▫️ Node; <a:certo:678393441037844494>
▫️ Subdomínio. <a:certo:678393441037844494>`)
                                .setColor("PURPLE")
                                .setFooter("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL);
                                                      membro.send(embedTodo).then(async msg7 => {
                                                        await msg7.react("678393441037844494");
                                                        await msg7.react("678394144011452421")
                                                         const sim = msg7.createReactionCollector((r, u) => (r.emoji.id === "678393441037844494" && u.id !== client.user.id));
                                                         const nao = msg7.createReactionCollector((r, u) => (r.emoji.id === "678394144011452421" && u.id !== client.user.id));
                                                        sim.on("collect",async() => {
                                                          msg7.delete()
                                                          const nomee = "subdominio-de-"+membro.user.username.toLowerCase().split(" ").join("-")
  servidor.createChannel(nomee, {type: "text"}).then(async c => {
    database.ref(`Fantasy/tickets/canais/${c.id}`)
         .set({
           dono: membro.user.tag,
           donoID: membro.user.id,
           channelID: c.id
         })
    database.ref(`Fantasy/tickets/canais/${membro.user.id}`)
         .set({
           dono: membro.user.tag,
           donoID: membro.user.id,
           status: "ativo",
           channelID: c.id
         })
    
   c.setParent("671030408686862337")
    c.overwritePermissions(diretor, {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true
              });
    c.overwritePermissions(gerente, {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true
              });
    c.overwritePermissions(servidor.defaultRole, {
                VIEW_CHANNEL: false,
                SEND_MESSAGES: false
              }); 
                                                                       
                c.overwritePermissions(membro, {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true
              });
    membro.send(new Discord.RichEmbed().setAuthor("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL).setDescription(`${membro}, seu atendimento acaba de ser criado. \n\nPara acessá-lo, basta clicar aqui: <#${c.id}>`).setColor("PURPLE").setFooter("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL))
    c.send(new Discord.RichEmbed().setAuthor("Fantasy Hosting - Categoria selecionada: Solicitar subdomínio", client.user.displayAvatarURL)
           .setDescription(`**Informações**:

▫️ **Nome e Sobrenome:** ${nome.collected.first().content}
▫️ **E-mail:**  ${email.collected.first().content}
▫️ **Ip do servidor:** ${ip.collected.first().content}
▫️ **Porta do servidor:** ${porta.collected.first().content}
▫️ **Node:** ${node.collected.first().content}
▫️ **Subdomínio:** ${sub.collected.first().content}`).setColor("PURPLE").setFooter("Fantasy Hosting - Categoria selecionada: Solicitar subdomínio", client.user.displayAvatarURL)).then(async msg => {msg.react("❌")})
  })
                                                        
                                                        })
                                                        nao.on("collect",async() => {
                                                          msg7.delete()
                                                          membro.send("Operação cancelada.")
                                                        })
                                                      })
                                                    })
                                                  })
                                                 })
                                              })
                                            })
                                            })
                                          })
                                        })
                                      })
                                    })
                                  })
                                }).catch(err => canal.send("Habilite suas mensagens privadas para utilizar o atendimento, "+membro+".").then(async msg => {msg.delete(5000)}))
                              } 
                              
                              
                              
                              
                              
                              
                              
                              
                              if(dados.d.emoji.id === "688551001724158089") { // suporte técnico
                                const embedInicial = new Discord.RichEmbed()
                                .setAuthor("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL)
                                .setDescription(`Para abrir um Suporte Técnico, são necessárias algumas informações. Por favor, envie seu nome e sobrenome.

**Informações**:

▫️ Nome e Sobrenome;
▫️ E-mail;
▫️ Ip do servidor;
▫️ Node (coloque seu node, exemplo: OVH-1);`)
                                .setColor("PURPLE")
                                .setFooter("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL);
                                membro.send(embedInicial).then(async msg => {
                                  const nome = msg.channel.createMessageCollector(m => m.author.id !== client.user.id, {max:1,time:6000000});
                                  nome.on("collect",async() => {
                                    msg.delete()
                                    const embedNome = new Discord.RichEmbed()
                                    .setAuthor("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL)
                                .setDescription(`Para abrir um Suporte Técnico, são necessárias algumas informações. Envie seu email cadastrado em nosso site.

**Informações**:

▫️ Nome e Sobrenome; <a:certo:678393441037844494>
▫️ E-mail;
▫️ Ip do servidor;
▫️ Node (coloque seu node, exemplo: OVH-1);`)
                                .setColor("PURPLE")
                                .setFooter("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL);
                                    membro.send(embedNome).then(async msg2 => {
                                      const email = msg2.channel.createMessageCollector(m => m.author.id !== client.user.id, {max:1,time:6000000});
                                      email.on("collect",async() => {
                                        msg2.delete()
                                        const embedEmail = new Discord.RichEmbed()
                                    .setAuthor("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL)
                                .setDescription(`Para abrir um Suporte Técnico, são necessárias algumas informações. Envie o IP do servidor que deseja o subdomínio.

**Informações**:

▫️ Nome e Sobrenome; <a:certo:678393441037844494>
▫️ E-mail; <a:certo:678393441037844494>
▫️ Ip do servidor;
▫️ Node (coloque seu node, exemplo: OVH-1);`)
                                .setColor("PURPLE")
                                .setFooter("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL);
                                        membro.send(embedEmail).then(async msg3 => {
                                          const ip = msg3.channel.createMessageCollector(m => m.author.id !== client.user.id, {max:1,time:6000000});
                                          ip.on("collect",async() => {
                                            msg3.delete()
                                            const embedIp = new Discord.RichEmbed()
                                    .setAuthor("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL)
                                .setDescription(`Para abrir um Suporte Técnico, são necessárias algumas informações. Envie a porta do seu servidor citada em seu painel (ex: 157.5.0.0).

**Informações**:

▫️ Nome e Sobrenome; <a:certo:678393441037844494>
▫️ E-mail; <a:certo:678393441037844494>
▫️ Ip do servidor; <a:certo:678393441037844494>
▫️ Node (coloque seu node, exemplo: OVH-1);`)
                                .setColor("PURPLE")
                                .setFooter("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL);
                                            membro.send(embedIp).then(async msg5 => {
                                                const node = msg5.channel.createMessageCollector(m => m.author.id !== client.user.id, {max:1,time:6000000});
                                                node.on("collect",async() => {
                                                  msg5.delete()
                                                  const embedNode = new Discord.RichEmbed()
                                    .setAuthor("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL)
                                .setDescription(`Para abrir um Suporte Técnico, são necessárias algumas informações. Reaja abaixo com <a:certo:678393441037844494> para confirmar e abrir a sala de solicitação.

**Informações**:

▫️ Nome e Sobrenome; <a:certo:678393441037844494>
▫️ E-mail; <a:certo:678393441037844494>
▫️ Ip do servidor; <a:certo:678393441037844494>
▫️ Node; <a:certo:678393441037844494>`)
                                .setColor("PURPLE")
                                .setFooter("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL);
                                                  membro.send(embedNode).then(async msg7 => {
                                                        await msg7.react("678393441037844494");
                                                        await msg7.react("678394144011452421")
                                                         const sim = msg7.createReactionCollector((r, u) => (r.emoji.id === "678393441037844494" && u.id !== client.user.id));
                                                         const nao = msg7.createReactionCollector((r, u) => (r.emoji.id === "678394144011452421" && u.id !== client.user.id));
                                                        sim.on("collect",async() => {
                                                          msg7.delete()
                                                          const nomee = "tecnico-de-"+membro.user.username.toLowerCase().split(" ").join("-")
  servidor.createChannel(nomee, {type: "text"}).then(async c => {
    database.ref(`Fantasy/tickets/canais/${c.id}`)
         .set({
           dono: membro.user.tag,
           donoID: membro.user.id,
           channelID: c.id
         })
    database.ref(`Fantasy/tickets/canais/${membro.user.id}`)
         .set({
           dono: membro.user.tag,
           donoID: membro.user.id,
           status: "ativo",
           channelID: c.id
         })
    
   c.setParent("671030408686862337")
    c.overwritePermissions(diretor, {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true
              });
    c.overwritePermissions(gerente, {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true
              });
    c.overwritePermissions(servidor.defaultRole, {
                VIEW_CHANNEL: false,
                SEND_MESSAGES: false
              }); 
                                                                       
                c.overwritePermissions(membro, {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true
              });
    membro.send(new Discord.RichEmbed().setAuthor("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL).setDescription(`${membro}, seu atendimento acaba de ser criado. \n\nPara acessá-lo, basta clicar aqui: <#${c.id}>`).setColor("PURPLE").setFooter("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL))
    c.send(new Discord.RichEmbed().setAuthor("Fantasy Hosting - Categoria selecionada: Suporte Técnico", client.user.displayAvatarURL)
           .setDescription(`**Informações**:

▫️ **Nome e Sobrenome:** ${nome.collected.first().content}
▫️ **E-mail:**  ${email.collected.first().content}
▫️ **Ip do servidor:** ${ip.collected.first().content}
▫️ **Node:** ${node.collected.first().content}`).setColor("PURPLE").setFooter("Fantasy Hosting - Categoria selecionada: Suporte Técnico", client.user.displayAvatarURL)).then(async msg => {msg.react("❌")})
  })
                                                        
                                                        })
                                                        nao.on("collect",async() => {
                                                          msg7.delete()
                                                          membro.send("Operação cancelada.")
                                                        })
                                                      })
                                                    })
                                                  })
                                          })
                                        })
                                      })
                                    })
                                  })
                                }).catch(err => canal.send("Habilite suas mensagens privadas para utilizar o atendimento, "+membro+".").then(async msg => {msg.delete(5000)}))
                              } 
                              
                              
                              
                              
                              
                              
                              
                              
                              
                              if(dados.d.emoji.name === "💰") { // suporte financeiro
                                const embedInicial = new Discord.RichEmbed()
                                .setAuthor("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL)
                                .setDescription(`Para abrir um Suporte Financeiro, são necessárias algumas informações. Por favor, envie seu nome e sobrenome.

**Informações**:

▫️ Nome e Sobrenome;
▫️ E-mail;
▫️ Ip do servidor;
▫️ Node (coloque seu node, exemplo: OVH-1);`)
                                .setColor("PURPLE")
                                .setFooter("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL);
                                membro.send(embedInicial).then(async msg => {
                                  const nome = msg.channel.createMessageCollector(m => m.author.id !== client.user.id, {max:1,time:6000000});
                                  nome.on("collect",async() => {
                                    msg.delete()
                                    const embedNome = new Discord.RichEmbed()
                                    .setAuthor("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL)
                                .setDescription(`Para abrir um Suporte Financeiro, são necessárias algumas informações. Envie seu email cadastrado em nosso site.

**Informações**:

▫️ Nome e Sobrenome; <a:certo:678393441037844494>
▫️ E-mail;
▫️ Ip do servidor;
▫️ Node (coloque seu node, exemplo: OVH-1);`)
                                .setColor("PURPLE")
                                .setFooter("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL);
                                    membro.send(embedNome).then(async msg2 => {
                                      const email = msg2.channel.createMessageCollector(m => m.author.id !== client.user.id, {max:1,time:6000000});
                                      email.on("collect",async() => {
                                        msg2.delete()
                                        const embedEmail = new Discord.RichEmbed()
                                    .setAuthor("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL)
                                .setDescription(`Para abrir um Suporte Financeiro, são necessárias algumas informações. Envie o IP do seu servidor.

**Informações**:

▫️ Nome e Sobrenome; <a:certo:678393441037844494>
▫️ E-mail; <a:certo:678393441037844494>
▫️ Ip do servidor;
▫️ Node (coloque seu node, exemplo: OVH-1);`)
                                .setColor("PURPLE")
                                .setFooter("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL);
                                        membro.send(embedEmail).then(async msg3 => {
                                          const ip = msg3.channel.createMessageCollector(m => m.author.id !== client.user.id, {max:1,time:6000000});
                                          ip.on("collect",async() => {
                                            msg3.delete()
                                            const embedIp = new Discord.RichEmbed()
                                    .setAuthor("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL)
                                .setDescription(`Para abrir um SSuporte Financeiro, são necessárias algumas informações. Envie o Node do seu servidor citada em seu painel (ex: OVH-1).

**Informações**:

▫️ Nome e Sobrenome; <a:certo:678393441037844494>
▫️ E-mail; <a:certo:678393441037844494>
▫️ Ip do servidor; <a:certo:678393441037844494>
▫️ Node (coloque seu node, exemplo: OVH-1);`)
                                .setColor("PURPLE")
                                .setFooter("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL);
                                            membro.send(embedIp).then(async msg5 => {
                                                const node = msg5.channel.createMessageCollector(m => m.author.id !== client.user.id, {max:1,time:6000000});
                                                node.on("collect",async() => {
                                                  msg5.delete()
                                                  const embedNode = new Discord.RichEmbed()
                                    .setAuthor("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL)
                                .setDescription(`Para abrir um Suporte Financeiro, são necessárias algumas informações. Reaja abaixo com <a:certo:678393441037844494> para confirmar e abrir a sala de solicitação.

**Informações**:

▫️ Nome e Sobrenome; <a:certo:678393441037844494>
▫️ E-mail; <a:certo:678393441037844494>
▫️ Ip do servidor; <a:certo:678393441037844494>
▫️ Node; <a:certo:678393441037844494>`)
                                .setColor("PURPLE")
                                .setFooter("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL);
                                                  membro.send(embedNode).then(async msg7 => {
                                                        await msg7.react("678393441037844494");
                                                        await msg7.react("678394144011452421")
                                                         const sim = msg7.createReactionCollector((r, u) => (r.emoji.id === "678393441037844494" && u.id !== client.user.id));
                                                         const nao = msg7.createReactionCollector((r, u) => (r.emoji.id === "678394144011452421" && u.id !== client.user.id));
                                                        sim.on("collect",async() => {
                                                          msg7.delete()
                                                          const nomee = "tecnico-de-"+membro.user.username.toLowerCase().split(" ").join("-")
  servidor.createChannel(nomee, {type: "text"}).then(async c => {
    database.ref(`Fantasy/tickets/canais/${c.id}`)
         .set({
           dono: membro.user.tag,
           donoID: membro.user.id,
           channelID: c.id
         })
    database.ref(`Fantasy/tickets/canais/${membro.user.id}`)
         .set({
           dono: membro.user.tag,
           donoID: membro.user.id,
           status: "ativo",
           channelID: c.id
         })
    
   c.setParent("671030408686862337")
    c.overwritePermissions(diretor, {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true
              });
    c.overwritePermissions(gerente, {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true
              });
    c.overwritePermissions(servidor.defaultRole, {
                VIEW_CHANNEL: false,
                SEND_MESSAGES: false
              }); 
                                                                       
                c.overwritePermissions(membro, {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true
              });
    membro.send(new Discord.RichEmbed().setAuthor("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL).setDescription(`${membro}, seu atendimento acaba de ser criado. \n\nPara acessá-lo, basta clicar aqui: <#${c.id}>`).setColor("PURPLE").setFooter("Fantasy Hosting - Central de Atendimentos", client.user.displayAvatarURL))
    c.send(new Discord.RichEmbed().setAuthor("Fantasy Hosting - Categoria selecionada: Suporte Técnico", client.user.displayAvatarURL)
           .setDescription(`**Informações**:

▫️ **Nome e Sobrenome:** ${nome.collected.first().content}
▫️ **E-mail:**  ${email.collected.first().content}
▫️ **Ip do servidor:** ${ip.collected.first().content}
▫️ **Node:** ${node.collected.first().content}`).setColor("PURPLE").setFooter("Fantasy Hosting - Categoria selecionada: Suporte Técnico", client.user.displayAvatarURL)).then(async msg => {msg.react("❌")})
  })
                                                        
                                                        })
                                                        nao.on("collect",async() => {
                                                          msg7.delete()
                                                          membro.send("Operação cancelada.")
                                                        })
                                                      })
                                                    })
                                                  })
                                          })
                                        })
                                      })
                                    })
                                  })
                                }).catch(err => canal.send("Habilite suas mensagens privadas para utilizar o atendimento, "+membro+".").then(async msg => {msg.delete(5000)}))
                              }
                            }})}})})
}