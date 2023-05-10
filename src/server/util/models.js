const db = require("./database")
const {DataTypes} = require('sequelize')

module.exports = {
    User: db.define("user", {
        id: {
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        Username: {
            type: DataType.STRING({length: 20}),
            allowNull: false
        },
        Password: {
            type: DataType.STRING({length: 300})
        }
    }),
    Post: db.define("post", {
        id: {
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
    }),
    Like: db.define("like", {
        id: {
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
    })
}