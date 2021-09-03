const Discord = require("discord.js")
exports.run = (client, message, args, database) => {
  const embed = new Discord.RichEmbed()
  .setAuthor("Fantasy Hosting - Parceiros", client.user.displayAvatarURL)
  .setDescription(`Reaja com <:tag:680525563739242526> para ver nossos parceiros do YouTube;

Reaja com <:parceria_discord:688761010017796155> para ver nossos parceiros no Discord;

Reaja com 🌐 para ver nossos sites parceiros;`)
  .setColor("PURPLE")
  .setFooter("Fantasy Hosting - Parceiros", client.user.displayAvatarURL);
  message.channel.send(embed).then(async msg => {
    await msg.react("680525563739242526");
    await msg.react("688761010017796155");
    await msg.react("🌐");
    const yt = msg.createReactionCollector((r, u) => (r.emoji.id === "680525563739242526" && u.id !== client.user.id));
    const dc = msg.createReactionCollector((r, u) => (r.emoji.id === "688761010017796155" && u.id !== client.user.id));
    const site = msg.createReactionCollector((r, u) => (r.emoji.name === "🌐" && u.id !== client.user.id));
    yt.on("collect",async() => {
      database.ref(`Fantasy/Parceiros/patrocionio`)
      .once("value")
      .then(async function(db) {
        let todos
        let array = []
        if(!db.val()) {
          todos = "ainda não temos nenhum parceiro"
        } else {
          todos = await db.val()
          for(const i in todos) {
            array.push([`Parceiro: <@${i}> - [Clique aqui](${todos[i].prova})`])
          }
          todos = array.join("\n")
        }
        const embeda = new Discord.RichEmbed()
        .setAuthor("Fantasy Hosting - Youtubers Parceiros", client.user.displayAvatarURL)
        .setDescription(todos)
        .setColor("PURPLE")
        .setFooter("Fantasy Hosting - Youtubers Parceiros", client.user.displayAvatarURL);
        msg.edit(embeda)
        
      })
    })
    dc.on("collect",async() => {
      console.log("a")
    })
      site.on("collect",async() => {
      console.log("a")
    })
  })
}