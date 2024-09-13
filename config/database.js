const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: '213.32.103.188',
  port: '15023',
  dialect: 'postgres'
});

module.exports = sequelize;