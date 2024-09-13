const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Order = sequelize.define('Order', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    order_status_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
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
    },
    status_id:
    {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    type_id:
    {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Order;