const { Sequelize } = require('sequelize')

// configs
const config = require('./configs/database')

const sequelize = new Sequelize(config.development)

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.')
    })
    .catch(error => {
        console.error('Unable to connect to the database:', error)
    })
    .finally(() => { })

module.exports = sequelize

