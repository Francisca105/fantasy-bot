const discord = require('discord.js')
const fh = new discord.Client()
const {bot} = require('./config.json')
const token = bot.token;
const config = require('./config.json')

//const mysql = require('mysql')

      //CREATE TABLE IF NOT EXISTS `Tickets` (`ticketId` INTEGER auto_increment , `authorId` VARCHAR(255), `channelId` VARCHAR(255), `guildId` VARCHAR(255), `resolved` TINYINT(1), `messages` TEXT, `closeMessageId` VARCHAR(255), `additionalUsers` TEXT, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`ticketId`)) ENGINE=InnoDB

module.exports = fh

const { loadCommands, loadEvents, loadMysql } = require("./utils/handler")
loadCommands()
loadEvents()


/*let db =     mysql.createConnection({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
})

db.connect((err)=> {
    if(err) console.log(`[MYSQL] Ocorreu um erro ao conectar na mysql:\n${err}`)
    else console.log('[MYSQL] Conectado com sucesso!')
})

fh.on('ready', ()=> setInterval(myTimer, 3000))


function myTimer() {
    fh.channels.cache.get('732602339969597570').send(`Oie`)
}

fh.on('message', (msg)=>{
    db.query('SHOW TABLES;', function (error, results, fields) {
        if (error) throw error;
        //console.log('The solution is: ', results[0].solution);
        console.log(results)
    })
})*/


fh.login(token)
//fh.login('Njc2MDA5MjI1NjMzMTM2Njcw.XxMNkg.CAKGI4-57dZ6nsCf7igUGbVgGx0')