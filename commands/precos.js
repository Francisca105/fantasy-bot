const discord = require('discord.js')
exports.run = async (client, message) => {
    let embed1 = new discord.RichEmbed()
    .setAuthor('Preços', client.user.avatarURL, 'https://fantasyhosting.com')
        .setDescription('Escolhe uma categoria para te informar os preços!')
        .addField('Hospedagem de bot', '> 🤖')
        .addField('Hospedagens de site', '> 🕸️')
        .addField('Hospedagens de Minecraft', '> 🔲')
        .addField('Revenda de Minecraft', '> 🖥️')
        .setFooter('Fantasy Hosting')
        .setColor('#32a4a8')
    let embed2 = new discord.RichEmbed()
        .setAuthor('Preços', client.user.avatarURL, 'https://fantasyhosting.com.br/botjs')
        .setDescription('Preços das hospedagens de bot:')
        .addField('FH-BOT .01', 'R$ 1,00/mês')
        .addField('FH-BOT .02', 'R$ 2,00/mês')
        .addField('FH-BOT .03', 'R$ 3,00/mês')
        .setColor('#00e8f0')
        .setFooter('Fantasy Hosting')
    let embed3 = new discord.RichEmbed()
        .setAuthor('Preços', client.user.avatarURL, 'https://fantasyhosting.com.br/sites')
        .setDescription('Preços das hospedagens de sites:')
        .addField('FH-SITES .01', 'R$ 3,00/mês')
        .addField('FH-SITES .02', 'R$ 6,00/mês')
        .addField('FH-SITES .03', 'R$ 9,00/mês')
        .addField('FH-SITES .04', 'R$ 64,00/mês')
        .setColor('#0852ff')
        .setFooter('Fantasy Hosting')
    let embed4 = new discord.RichEmbed()
        .setAuthor('Preços', client.user.avatarURL, 'https://fantasyhosting.com.br/revenda-mine')
        .setDescription('Preços dos planos de revenda de minecraft:')
        .addField('FH-REVENDA-MINE .01', 'R$ 130,00/mês')
        .addField('FH-REVENDA-MINE .02', 'R$ 160,00/mês')
        .addField('FH-REVENDA-MINE .03', 'R$ 240,00/mês')
        .addField('FH-REVENDA-MINE .04', 'R$ 400,00/mês')
        .setColor('#638ef2')
        .setFooter('Fantasy Hosting')
    let embed5 = new discord.RichEmbed()
        .setAuthor('Preços', client.user.avatarURL, 'https://fantasyhosting.com.br/minecraft')
        .setDescription('Preços das hospedagens de minecraft:')
        .addField('Estados Unidos', '> 🇺🇸')
        .addField('Alemanha', '> 🇩🇪')
        .addField('Canadá', '> 🇨🇦')
        .addField('Brasil', '> 🇧🇷')
        .setColor('#b300ff')
        .setFooter('Fantasy Hosting')         

        let mine1 = new discord.RichEmbed()
        .setAuthor('Preços', client.user.avatarURL, 'https://fantasyhosting.com.br/minecraft')
        .setDescription('Preços das hospedagens de minecraft Alemã:')
        .addField('FH-MINECRAFT-ALEMA .01', 'R$ 3,00/mês')
        .addField('FH-MINECRAFT-ALEMA .02', 'R$ 6,00/mês')
        .addField('FH-MINECRAFT-ALEMA .03', 'R$ 9,00/mês')
        .addField('FH-MINECRAFT-ALEMA .04', 'R$ 12,00/mês')
        .addField('FH-MINECRAFT-ALEMA .05', 'R$ 15,00/mês')
        .addField('FH-MINECRAFT-ALEMA .06', 'R$ 18,00/mês')
        .addField('FH-MINECRAFT-ALEMA .07', 'R$ 21,00/mês')
        .addField('FH-MINECRAFT-ALEMA .01', 'R$ 24,00/mês')
        .addField('FH-MINECRAFT-ALEMA .09', 'R$ 27,00/mês')
        .addField('FH-MINECRAFT-ALEMA .10', 'R$ 30,00/mês')
        .addField('FH-MINECRAFT-ALEMA .16', 'R$ 48,00/mês')
        .addField('FH-MINECRAFT-ALEMA .24', 'R$ 70,00/mês')
        .addField('FH-MINECRAFT-ALEMA .32', 'R$ 96,00/mês')
        .addField('FH-MINECRAFT-ALEMA .56', 'R$ 130,00/mês')
        .setColor('#b300ff')
        .setFooter('Fantasy Hosting')

        let mine2 = new discord.RichEmbed()
        .setAuthor('Preços', client.user.avatarURL, 'https://fantasyhosting.com.br/minecraft')
        .setDescription('Preços das hospedagens de minecraft Canadá:')
        .addField('FH-MINECRAFT-CANADA .01', 'R$ 5,00/mês')
        .addField('FH-MINECRAFT-CANADA .02', 'R$ 8,00/mês')
        .addField('FH-MINECRAFT-CANADA .03', 'R$ 10,00/mês')
        .addField('FH-MINECRAFT-CANADA .04', 'R$ 13,00/mês')
        .addField('FH-MINECRAFT-CANADA .05', 'R$ 16,00/mês')
        .addField('FH-MINECRAFT-CANADA .06', 'R$ 19,00/mês')
        .addField('FH-MINECRAFT-CANADA .07', 'R$ 22,00/mês')
        .addField('FH-MINECRAFT-CANADA .01', 'R$ 25,00/mês')
        .addField('FH-MINECRAFT-CANADA .09', 'R$ 28,00/mês')
        .addField('FH-MINECRAFT-CANADA .10', 'R$ 31,00/mês')
        .addField('FH-MINECRAFT-CANADA .16', 'R$ 60,00/mês')
        .addField('FH-MINECRAFT-CANADA .24', 'R$ 85,00/mês')
        .addField('FH-MINECRAFT-CANADA .32', 'R$ 100,00/mês')
        .addField('FH-MINECRAFT-CANADA .56', 'R$ 150,00/mês')
        .setColor('#b300ff')
        .setFooter('Fantasy Hosting')
        let mine3 = new discord.RichEmbed()
        .setAuthor('Preços', client.user.avatarURL, 'https://fantasyhosting.com.br/minecraft')
        .setDescription('Preços das hospedagens de minecraft EUA:')
        .addField('FH-MINECRAFT-EUA .01', 'R$ 7,00/mês')
        .addField('FH-MINECRAFT-EUA .02', 'R$ 10,00/mês')
        .addField('FH-MINECRAFT-EUA .03', 'R$ 13,00/mês')
        .addField('FH-MINECRAFT-EUA .04', 'R$ 16,00/mês')
        .addField('FH-MINECRAFT-EUA .05', 'R$ 19,00/mês')
        .addField('FH-MINECRAFT-EUA .06', 'R$ 22,00/mês')
        .addField('FH-MINECRAFT-EUA .07', 'R$ 25,00/mês')
        .addField('FH-MINECRAFT-EUA .01', 'R$ 28,00/mês')
        .addField('FH-MINECRAFT-EUA .09', 'R$ 31,00/mês')
        .addField('FH-MINECRAFT-EUA .10', 'R$ 34,00/mês')
        .addField('FH-MINECRAFT-EUA .16', 'R$ 70,00/mês')
        .addField('FH-MINECRAFT-EUA .24', 'R$ 98,00/mês')
        .addField('FH-MINECRAFT-EUA .32', 'R$ 115,00/mês')
        .addField('FH-MINECRAFT-EUA .56', 'R$ 178,00/mês')
        .setColor('#b300ff')
        .setFooter('Fantasy Hosting')
        let mine4 = new discord.RichEmbed()
        .setAuthor('Preços', client.user.avatarURL, 'https://fantasyhosting.com.br/minecraft')
        .setDescription('Preços das hospedagens de minecraft Brasil:')
        .addField('FH-MINECRAFT-BRASIL .01', 'R$ 10,00/mês')
        .addField('FH-MINECRAFT-BRASIL .02', 'R$ 15,00/mês')
        .addField('FH-MINECRAFT-BRASIL .03', 'R$ 20,00/mês')
        .addField('FH-MINECRAFT-BRASIL .04', 'R$ 25,00/mês')
        .addField('FH-MINECRAFT-BRASIL .05', 'R$ 30,00/mês')
        .addField('FH-MINECRAFT-BRASIL .06', 'R$ 35,00/mês')
        .addField('FH-MINECRAFT-BRASIL .07', 'R$ 40,00/mês')
        .addField('FH-MINECRAFT-BRASIL .01', 'R$ 45,00/mês')
        .addField('FH-MINECRAFT-BRASIL .09', 'R$ 50,00/mês')
        .addField('FH-MINECRAFT-BRASIL .10', 'R$ 55,00/mês')
        .addField('FH-MINECRAFT-BRASIL .16', 'R$ 85,00/mês')
        .addField('FH-MINECRAFT-BRASIL .24', 'R$ 105,00/mês')
        .addField('FH-MINECRAFT-BRASIL .32', 'R$ 130,00/mês')
        .addField('FH-MINECRAFT-BRASIL .56', 'R$ 200,00/mês')
        .setColor('#b300ff')
        .setFooter('Fantasy Hosting')

        message.channel.send(embed1).catch(e => message.channel.send(embed1))
        .then(async (msg) => {
            await msg.react("🤖")
            await msg.react("🕸️")          
            await msg.react("🔲")  
            await msg.react("🖥️")                    
            await msg.react("🔙")

            const filter = (reaction, user) => ['🔙', "🖥️", "🔲", "🕸️", "🤖"].includes(reaction.emoji.name) && user.id === message.author.id
            const collector = msg.createReactionCollector(filter, { time: 90000 })
            collector.on("collect", r => {
         
                switch (r.emoji.name) {
                    case '🤖':
                        msg.edit(embed2)
                        break;
                    case '🕸️':
                        msg.edit(embed3)
                        break;
                    case '🖥️':
                        msg.edit(embed4)
                        break;
                    case '🔙':
                        msg.edit(embed1)                                  
                        break;
                    case '🔲':
                        msg.delete()
                        message.channel.send(embed5).catch(e => message.channel.send(embed5)).then(async (pmine) => {
                            await pmine.react("🇺🇸")
                            await pmine.react("🇩🇪")          
                            await pmine.react("🇨🇦")  
                            await pmine.react("🇧🇷")                    
                            await pmine.react("⏹️")
                
                            const filter = (reaction, user) => ['🇺🇸', "🇩🇪", "🇨🇦", "🇧🇷", "⏹️"].includes(reaction.emoji.name) && user.id === message.author.id
                            const collector = pmine.createReactionCollector(filter, { time: 90000 })
                            collector.on("collect", a => {
                         
                                switch (a.emoji.name) {
                                    case '🇺🇸':
                                    pmine.edit(mine3)
                                    break;
                                    case '🇩🇪':
                                    pmine.edit(mine1)
                                    break;                            
                                    case '🇨🇦':
                                    pmine.edit(mine2)
                                    break;      
                                    case '🇧🇷':
                                    pmine.edit(mine4)
                                    break;
                                    case '⏹️':
                                    pmine.delete()
                                    message.channel.send('Menu de preços fechado.').then(a => a.delete(15000))
                                }})});                              
}})})}