exports.run = async (client, message, args) => {
    const m = await message.channel.send("A calcular o ping...");
    m.edit(`Ping Fantasy!\nPing da Hospedagem do bot é **${Math.round(client.ping)}**ms.`);
  }