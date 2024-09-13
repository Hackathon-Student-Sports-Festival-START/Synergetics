const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const GameNet = sequelize.define('GameNet', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
    }
});

module.exports = GameNet;