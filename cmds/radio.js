module.exports.command = {
    name: "radio",
    aliases: ["musica", "play", "tocar"],
    description: "Toca música.",
    category: "Música",
    usage: "radio"
}

exports.run = async (fh, message, args) => {
    let canal = message.member.voice.channel
    if(!canal) return message.channel.send('Não estás em nenhum canal!')
    
    canal.join().then(async connection => {
        const dispatcher = await connection.play('http://mcrscast1.mcr.iol.pt/comercial.mp3');
      })
}