const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Order = sequelize.define('Order', {
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
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = Order;