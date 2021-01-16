const Sequelize = require('sequelize')
const contactModel = require('./contact.model')
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.contacts = contactModel(sequelize, Sequelize.DataTypes)

module.exports = db