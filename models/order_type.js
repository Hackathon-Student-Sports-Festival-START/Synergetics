const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const OrderType = sequelize.define('OrderType', {
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

module.exports = OrderType;