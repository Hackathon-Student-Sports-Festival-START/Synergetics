const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Event = require('./event')
const Sponsor = require('./sponsor')


const Event_Sponsor = sequelize.define('Event_Sponsor', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }
});

Event.belongsToMany(sponsor, {through: Event_Sponsor});
sponsor.belongsToMany(Event, {through: Event_Sponsor});

module.exports = Event_Sponsor;