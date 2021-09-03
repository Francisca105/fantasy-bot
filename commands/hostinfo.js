const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let embed = new Discord.RichEmbed()
    .setColor([127, 11, 181])
    .setAuthor("Informações  da Hospedagem", client.user.avatarURL)
    .setDescription("[Fantasy Hosting](https://fantasyhosting.com.br/aff.php?aff=93)")
    .addField("Sobre nós", "A Fantasy Hosting surgiu como opção para melhorar a jogabilidade dos clientes, fazendo que pessoas que não conhecem a Fantasy Hosting para testar as nossas hospedagens, intuito de falir as concorrências.")
    .addField("Equipe", "Somos composto por equipe de alta qualidade para atender melhor vocês clientes com dúvidas, com o Diretor Geral da FantasyHosting João Vitor ajudando melhor vocês atendendo no suporte contratando pessoas para o suporte para cada vez crescer mais ainda, composto por uma equipe de 11 membros.")
    .addField("Date Centers", "Nossos datacenter são localizados no Brasil, Canadá, Alemanha e Estados Unidos com uma rede de 1GBps, antiddos de 800GBps em todos datacenter internacional e nacional com uma antiddos de 5GBps.")
    .addField("Métodos de pagamento", "Oferecemos a nossos clientes diversas formas de pagamento. As formas de pagamento são: PagSeguro, MercadoPago, PayPal, Transferência Bancária, PaySafeCard e PicPay.")
    .addField("Contactos", "Para conseguirmos ajudar mais e ainda mais facilmente temos os seguintes meios de contacto:\nWhatsapp ``+55 45 8843-3750``\nEmail ``contato@fantasyhosting.com.br``\nTwitter ``@HostingFantasy``")
    .setFooter(message.author.username + " • Fantasy Hosting")
    .setTimestamp();

  message.channel.send(embed);

} 