module.exports.command = {
    name: "hostinfo",
    aliases: ["hi", "hinfo", "hosti", "infoh", "infohost", "contactos"],
    description: "Página de informações da hospedagem.",
    category: "Informação",
    usage: "hostinfo"
}

exports.run = async (fh, message, args) => {
    const discord = require('discord.js')
    const config = require('../config.json')

    let embed = new discord.MessageEmbed()
    .setColor([127, 11, 181])
    .setAuthor("Informações  da Hospedagem", fh.user.avatarURL())
    .setDescription(`[Fantasy Hosting](https://fantasyhosting.com.br/aff.php?aff=93)`)
    .addField("Sobre nós", `A Fantasy Hosting surgiu como opção para melhorar a jogabilidade dos clientes, fazendo que pessoas que não conhecem a Fantasy Hosting para testar as nossas hospedagens como o nosso servidor oficial ${config.hospedagem.servidor_mine}.`)
    .addField("Equipe", "Somos composto por equipe de alta qualidade para atender melhor vocês clientes com dúvidas, com o Diretor Geral da FantasyHosting João Vitor ajudando melhor vocês atendendo no suporte contratando pessoas para o suporte para cada vez crescer mais ainda, composto por uma equipe de 11 membros.")
    .addField("Date Centers", "Nossos datacenter são localizados no Brasil e Estados Unidos com uma rede de 500MBps no Estados Unidos e 100MBps Full Duplex no Brasil, Antiddos de 800GBps no Estados Unidos e no Brasil com um AntiDDoS de 10GBps.")
    .addField("Métodos de pagamento", "Oferecemos a nossos clientes diversas formas de pagamento. As formas de pagamento são: PagSeguro, MercadoPago, PayPal, Transferência Bancária, PaySafeCard e PicPay.")
    .addField("Contactos", "Para conseguirmos ajudar mais e ainda mais facilmente temos os seguintes meios de contacto:\nWhatsapp ``+55 32 8480-0341``\nEmail ``contato@fantasyhosting.com.br``\nTwitter ``@HostingFantasy``")
    .setFooter(`${message.author.username} ${config.textos.footer}`)

    message.channel.send(embed)
}