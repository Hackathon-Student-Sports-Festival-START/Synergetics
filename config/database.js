const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'lsndvkuhi723fy283vcni3j8fc23iuosm', {
  host: '213.32.103.188',
  port: 15032,
  dialect: 'postgres'
});

module.exports = sequelize;





