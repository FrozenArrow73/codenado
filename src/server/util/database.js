const {Sequelize} = require('sequelize')
require('dotenv').config()
const DATABASE_URL = process.env.DATABASE_URL

const db = new Sequelize (
    

)

module.exports = db