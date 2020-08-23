const fh = require('../index')
const discord = require('discord.js')
const db = require("../database")
const monitor = require('ping-monitor')
const tickets = require('../tabelas/Ticket')
const aviso = require('../tabelas/Aviso')
const { config } = require('../database')
const ips = require('../config.json')

fh.on('ready', () => {
    console.log(`${fh.user.username} (${fh.user.id}) está online!`/*, em ${fh.guilds.size} servidores, com ${fh.users.size} usuários.*/)
    fh.user.setActivity("fiquei online!");
    
       let statuses = [
           `FantasyHosting`,
       ]
    
       setInterval(function() {
           let status = statuses[Math.floor(Math.random() * statuses.length)];
           fh.user.setActivity(status/*, {type: "STREAMING", url:"https://discord.gg/KBHNPYh"}*/);
    
       }, 5000)

       db.authenticate().then(()=>{
            console.log(`[MYSQL] Conectado`)
            tickets.init(db)
            tickets.sync()
            aviso.init(db)
            aviso.sync()

       }).catch(err => console.log(`[MYSQL] Erro ao conectar: ${err}`))

       async function onOFF(node){
           //let find = await aviso.findOne({ where: { node: node }})
        //if(!find){
            let joao = fh.users.cache.get(ips.joao)
            joao.send(`O node ${node} acabou de ficar offline!`).then(console.log('O joão foi notificado de o node '+ node +' estar offline.'))
            /*await aviso.create({
                avisado: true,
                node: node
            });
        } else if(find.avisado === true) return;
        else{
            let joao = fh.users.cache.get(ips.joao)
            joao.send(`O node ${node} acabou de ficar offline!`)
        }*/
       };


       const INTER1 = new monitor({
           address: ips.hospedagem.links.ips.inter1,
           port: ips.hospedagem.links.ips.portas.inter1,
           interval: 15
       })

        INTER1.on('up', function (res, state){
        console.log('O node inter-01 está online.');
    })
        INTER1.on('down', function (res, state){
            console.log('O node inter-01 está offline.');
            onOFF('inter1')
        })
        INTER1.on('stop', function (res, state){
            console.log('O node inter-01 está parado.');
            onOFF('inter1')
        })    
        INTER1.on('timeout', function (res, state){
            console.log('O node inter-01 está com gateaway time out.');
            onOFF('inter1')
        })  

        const INTER2 = new monitor({
            address: ips.hospedagem.links.ips.inter2,
            port: ips.hospedagem.links.ips.portas.inter2,
            interval: 15
        })
 
            INTER2.on('up', function (res, state){
                console.log('O node inter-02 está online.');
            })
            INTER2.on('down', function (res, state){
                console.log('O node inter-02 está offline.');
                onOFF('inter2')
            })
            INTER2.on('stop', function (res, state){
                console.log('O node inter-02 está parado.');
                onOFF('inter2')
            })    
            INTER2.on('timeout', function (res, state){
                console.log('O node inter-02 está com gateaway time out.');
                onOFF('inter2')
            })    
            
            const INTER3 = new monitor({
                address: ips.hospedagem.links.ips.inter3,
                port: ips.hospedagem.links.ips.portas.inter3,
                interval: 15
            })
     
            INTER3.on('up', function (res, state){
                    console.log('O node inter-03 está online.');
                })
                INTER3.on('down', function (res, state){
                    console.log('O node inter-03 está offline.');
                    onOFF('inter3')
                })
                INTER3.on('stop', function (res, state){
                    console.log('O node inter-03 está parado.');
                    onOFF('inter3')
                })    
                INTER3.on('timeout', function (res, state){
                    console.log('O node inter-03 está com gateaway time out.');
                    onOFF('inter3')
                })   
                
                const INTER4 = new monitor({
                    address: ips.hospedagem.links.ips.inter4,
                    port: ips.hospedagem.links.ips.portas.inter4,
                    interval: 15
                })
         
                INTER4.on('up', function (res, state){
                        console.log('O node inter-04 está online.');
                    })
                    INTER4.on('down', function (res, state){
                        console.log('O node inter-04 está offline.');
                        onOFF('inter4')
                    })
                    INTER4.on('stop', function (res, state){
                        console.log('O node inter-04 está parado.');
                        onOFF('inter4')
                    })    
                    INTER4.on('timeout', function (res, state){
                        console.log('O node inter-04 está com gateaway time out.');
                        onOFF('inter4')
                    })   

                    const INTER5 = new monitor({
                        address: ips.hospedagem.links.ips.inter5,
                        port: ips.hospedagem.links.ips.portas.inter5,
                        interval: 15
                    })
             
                    INTER5.on('up', function (res, state){
                            console.log('O node inter-05 está online.');
                        })
                        INTER5.on('down', function (res, state){
                            console.log('O node inter-05 está offline.');
                            onOFF('inter5')
                        })
                        INTER5.on('stop', function (res, state){
                            console.log('O node inter-05 está parado.');
                            onOFF('inter5')
                        })    
                        INTER5.on('timeout', function (res, state){
                            console.log('O node inter-05 está com gateaway time out.');
                            onOFF('inter5')
                        })      
                        
                        const INTERJS1 = new monitor({
                            address: ips.hospedagem.links.ips.interjs1,
                            port: ips.hospedagem.links.ips.portas.interjs1,
                            interval: 15
                        })
                 
                        INTERJS1.on('up', function (res, state){
                                console.log('O node inter-js-01 está online.');
                            })
                            INTERJS1.on('down', function (res, state){
                                console.log('O node inter-js-01 está offline.');
                                onOFF('inter-bots-js1')
                            })
                            INTERJS1.on('stop', function (res, state){
                                console.log('O node inter-js-01 está parado.');
                                onOFF('inter-bots-js1')
                            })    
                            INTERJS1.on('timeout', function (res, state){
                                console.log('O node inter-js-01 está com gateaway time out.');
                                onOFF('inter-bots-js1')
                            })   
                            
                            const INTERJS2 = new monitor({
                                address: ips.hospedagem.links.ips.interjs2,
                                port: ips.hospedagem.links.ips.portas.interjs2,
                                interval: 15
                            })
                     
                            INTERJS2.on('up', function (res, state){
                                    console.log('O node inter-js-02 está online.');
                                })
                                INTERJS2.on('down', function (res, state){
                                    console.log('O node inter-js-02 está offline.');
                                    onOFF('inter-bots-js2')
                                })
                                INTERJS2.on('stop', function (res, state){
                                    console.log('O node inter-js-02 está parado.');
                                    onOFF('inter-bots-js2')
                                })    
                                INTERJS2.on('timeout', function (res, state){
                                    console.log('O node inter-js-02 está com gateaway time out.');
                                    onOFF('inter-bots-js2')
                                }) 

                            const BR = new monitor({
                                address: ips.hospedagem.links.ips.br1,
                                port: ips.hospedagem.links.ips.portas.br1,
                                interval: 15
                            })
                     
                            BR.on('up', function (res, state){
                                    console.log('O node br-01 está online.');
                                })
                                BR.on('down', function (res, state){
                                    console.log('O node br-01 está offline.');
                                    onOFF('br-01')
                                })
                                BR.on('stop', function (res, state){
                                    console.log('O node br-01 está parado.');
                                    onOFF('br-01')
                                })    
                                BR.on('timeout', function (res, state){
                                    console.log('O node br-01 está com gateaway time out.');
                                    onOFF('br-01')
                                })                                                                  
})