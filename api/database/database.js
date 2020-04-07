const Sequelize = require('sequelize');

const connection = new Sequelize('crud_irancho', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = connection;