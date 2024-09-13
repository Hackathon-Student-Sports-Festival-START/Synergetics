const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const athlete = sequelize.define('athlete', {
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
        type: DataTypes.String,
        allowNull: false
    },
    email: {
        type: DataTypes.String,
        allowNull: true
    },
    role_id: {
        type: DataTypes.Integer,
        allowNull: false
    },
    command_id: {
        type: DataTypes.Integer,
        allowNull: false
    },
    is_leader: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

module.exports = athlete;