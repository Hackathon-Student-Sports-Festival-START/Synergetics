const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const OrderStatus = sequelize.define('OrderStatus', {
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

module.exports = OrderStatus;