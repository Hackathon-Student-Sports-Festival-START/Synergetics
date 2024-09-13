const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Athlete = require('./athlete')
const Team = require('./team')


const AthleteCommand = sequelize.define('AthleteCommand', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }
});

Athlete.belongsToMany(Team, {through: AthleteCommand});
Team.belongsToMany(Athlete, {through: AthleteCommand});

module.exports = AthleteCommand;