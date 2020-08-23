const config = require("./config.json")
const { Sequelize } = require("sequelize")

module.exports = new Sequelize(config.mysql.database, config.mysql.user, config.mysql.password, {
    host: config.mysql.host,
    dialect: 'mysql'
})