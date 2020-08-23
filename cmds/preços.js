module.exports.command = {
    name: "preços",
    aliases: ["preco", "precos", "prices", "price", "preço", "produtos", "produto"],
    description: "Lista todos os preços de todos os produtos da hospedagem.",
    category: "Informação",
    usage: "preços"
}

exports.run = async (fh, message, args) => {
    const discord = require('discord.js')
    const config = require('../config.json')

    let precos = config.hospedagem.preços,
    emojis = config.textos.emojis.ids

    let mine = fh.emojis.cache.get(emojis.bloco),
    combo = fh.emojis.cache.get('679033568151863332' /*emojis.cristal*/),
    botjs = fh.emojis.cache.get('566692812247269392' /*emojis.discord*/),
    mcpe = fh.emojis.cache.get('566692236461604895' /*emojis.mine*/),
    mta = fh.emojis.cache.get('734071169665335296' /*emojis.mta*/),
    site = fh.emojis.cache.get('734070650620346450' /*emojis.site*/),
    cloud = fh.emojis.cache.get('613889544021868562' /*emojis.hospedagem*/),
    neg = fh.emojis.cache.get('510537601103560727' /*emojis.negado*/),
    setas = fh.emojis.cache.get(emojis.setas)
    //console.log(combo)

    if(!args[0]){

        let menuE = new discord.MessageEmbed()
        .setTitle(`Preços - Menu`)
        .setDescription(`Todas as nossas opções:
        ${mine} ${setas} Minecraft
        ${combo} ${setas} Combo network (Minecraft)
        ${botjs} ${setas} BotJS
        ${mcpe} ${setas} MC:PE
        ${mta} ${setas} Mta
        ${site} ${setas} Site
        ${cloud} ${setas} Cloud/Vps`)
        .setColor(config.cores.azul_claro)
        .setFooter(`${message.author.username} ${config.textos.footer}`)


        let menus = new discord.MessageEmbed()
        .setTitle(`Preços`)
        .setFooter(`${message.author.username} ${config.textos.footer}`)
        .setColor('RANDOM')

        message.channel.send(menuE).then(async a => {
                setInterval(()=>{
                    a.react(mine)
                }, 1)
                setInterval(()=>{
                    a.react(combo)
                }, 2)
                setInterval(()=>{
                    a.react(botjs)
                }, 3)
                setInterval(()=>{
                    a.react(mcpe)
                }, 4)
                setInterval(()=>{
                    a.react(mta)
                }, 5)
                setInterval(()=>{
                    a.react(site)
                }, 6)
                setInterval(()=>{
                    a.react(cloud)
                }, 7)
                setInterval(()=>{
                    a.react(neg)
                }, 10)
                const filter = (reaction, user) => {
                    return user.id === message.author.id;
                };

            const collector = a.createReactionCollector(filter, { time: 10000 })/*a => a.id === message.author.id*/ 
            .on('collect', async (reaction, user) => {
                //console.log(reaction)
                let filtro = a.reactions.cache.filter(reaction => reaction.users.cache.has(message.author.id));

                let r = reaction.emoji.id
                if(r === mine.id){
                    menus.setDescription(`Planos de hospedagem minecraft\n
                    **BR**
                    1gb ${setas} ${precos.minecraft.br["1gb"]}
                    2gb ${setas} ${precos.minecraft.br["2gb"]}
                    3gb ${setas} ${precos.minecraft.br["3gb"]}
                    4gb ${setas} ${precos.minecraft.br["4gb"]}\n
                    **US**
                    1gb ${setas} ${precos.minecraft.us["1gb"]}
                    2gb ${setas} ${precos.minecraft.us["2gb"]}
                    3gb ${setas} ${precos.minecraft.us["3gb"]}
                    4gb ${setas} ${precos.minecraft.us["4gb"]}\n
                    `)
                    
                    a.edit(menus)
                }else if(r === combo.id){
                    menus.setDescription(`Planos de hospedagem combo\n
                    **BR**
                    16gb ${setas} ${precos.combo.br["FH-COMBO-BR .16"]}
                    24gb ${setas} ${precos.combo.br["FH-COMBO-BR .24"]}
                    32gb ${setas} ${precos.combo.br["FH-COMBO-BR .32"]}\n
                    **US**
                    16gb ${setas} ${precos.combo.us["FH-COMBO-US .16"]}
                    24gb ${setas} ${precos.combo.us["FH-COMBO-US .24"]}
                    32gb ${setas} ${precos.combo.us["FH-COMBO-US .32"]}
                    `)
                    
                    a.edit(menus)
                }else if(r === botjs.id){
                    menus.setDescription(`Planos de hospedagem botjs (nodejs)\n
                    1gb ${setas} ${precos.botjs["FH-BOT .01"]}
                    2gb ${setas} ${precos.botjs["FH-BOT .02"]}
                    3gb ${setas} ${precos.botjs["FH-BOT .03"]}
                    15gb ${setas} ${precos.botjs["FH-BOT .04"]}`)
                    
                    a.edit(menus)
                }else if(r === mcpe.id){
                    menus.setDescription(`Planos de hospedagem mcpe\n
                    1gb ${setas} ${precos.mcpe["FH-MC:PE .01"]}
                    2gb ${setas} ${precos.mcpe["FH-MC:PE .02"]}
                    3gb ${setas} ${precos.mcpe["FH-MC:PE .03"]}
                    4gb ${setas} ${precos.mcpe["FH-MC:PE .04"]}
                    5gb ${setas} ${precos.mcpe["FH-MC:PE .05"]}
                    6gb ${setas} ${precos.mcpe["FH-MC:PE .06"]}
                    7gb ${setas} ${precos.mcpe["FH-MC:PE .07"]}
                    8gb ${setas} ${precos.mcpe["FH-MC:PE .08"]}
                    9gb ${setas} ${precos.mcpe["FH-MC:PE .09"]}
                    10gb ${setas} ${precos.mcpe["FH-MC:PE .10"]}
                    `)
                    
                    a.edit(menus)
                }
                else if(r === mta.id){
                    menus.setDescription(`Planos de hospedagem mta\n
                    100 slots ${setas} ${precos.mta["100 SLOTS"]}
                    200 slots ${setas} ${precos.mta["200 SLOTS"]}
                    300 slots ${setas} ${precos.mta["300 SLOTS"]}
                    400 slots ${setas} ${precos.mta["400 SLOTS"]}
                    1024 slots ${setas} ${precos.mta["1024 Slots"]}
                    `)
                    
                    a.edit(menus)
                }
                else if(r === site.id){
                    menus.setDescription(`Planos de hospedagem Site\n
                    50GB SSD ${setas} ${precos.sites["FH-SITES .01"]}
                    500GB SSD ${setas} ${precos.sites["FH-SITES .02"]}
                    1TB SSD ${setas} ${precos.sites["FH-SITES .03"]}
                    SSD Ilimitado ${setas} ${precos.sites["FH-SITES .04"]}
                    `)
                    
                    a.edit(menus)
                }
                else if(r === cloud.id){
                    menus.setDescription(`Planos de hospedagem cloud (vps)\n
                    **BR**
                    1gb ${setas} ${precos.cloud.br["FH-VPS-BR .01"]}
                    2gb ${setas} ${precos.cloud.br["FH-VPS-BR .02"]}
                    3gb ${setas} ${precos.cloud.br["FH-VPS-BR .03"]}
                    4gb ${setas} ${precos.cloud.br["FH-VPS-BR .04"]}
                    5gb ${setas} ${precos.cloud.br["FH-VPS-BR .05"]}
                    6gb ${setas} ${precos.cloud.br["FH-VPS-BR .06"]}
                    7gb ${setas} ${precos.cloud.br["FH-VPS-BR .07"]}
                    8gb ${setas} ${precos.cloud.br["FH-VPS-BR .08"]}\n
                    **US**
                    1gb ${setas} ${precos.cloud.us["FH-VPS-US .01"]}
                    2gb ${setas} ${precos.cloud.us["FH-VPS-US .02"]}
                    3gb ${setas} ${precos.cloud.us["FH-VPS-US .03"]}
                    4gb ${setas} ${precos.cloud.us["FH-VPS-US .04"]}
                    5gb ${setas} ${precos.cloud.us["FH-VPS-US .05"]}
                    6gb ${setas} ${precos.cloud.us["FH-VPS-US .06"]}
                    7gb ${setas} ${precos.cloud.us["FH-VPS-US .07"]}
                    8gb ${setas} ${precos.cloud.us["FH-VPS-US .08"]}`)
                    
                    a.edit(menus)
                }else {
                    let destroy = new discord.MessageEmbed()
                    .setTitle(`Menu de preços fechado`)
                    .setDescription(`Este menu foi fechado e será deletado.`)
                    .setFooter(`Adeus :3`)
                    .setColor('RED')
                    
                    a.reactions.removeAll()
                    await a.edit(destroy)
                    return await a.delete()
                    
                }
            });
        })
    }else{
        console.log('...')
    }
}