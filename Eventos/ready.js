exports.run = (client) => {
  client.user.setActivity(`Acesse meu site: fantasyhosting.com.br`);
  console.log(`Estou online, em ${client.guilds.size} servidores, com ${client.users.size} usuários`);
}