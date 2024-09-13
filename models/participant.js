const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user')

const Participant = sequelize.define('Participant', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

// User.hasOne(Participant,{ onDelete: "cascade"});
// User.belongsTo(Participant);

module.exports = Participant;