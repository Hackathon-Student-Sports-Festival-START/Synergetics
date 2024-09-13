const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Role = require('./participant');

const User = sequelize.define('User', {
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

Role.hasMany(User, { onDelete: "cascade"});
Role.belongsTo(User);

module.exports = User;