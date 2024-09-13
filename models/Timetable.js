const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Order = require('./order')
const Event = require('./event')


const Timetable = sequelize.define('Timetable', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }
});

Order.belongsToMany(Event, {through: Timetable});
Event.belongsToMany(Order, {through: Timetable});

module.exports = Timetable;