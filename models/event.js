const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Athlete = require('./athlete');

const Team = sequelize.define('Team', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})


module.exports = Team;