const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user')

const Admin = sequelize.define('Admin', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
    }
});

User.hasOne(Admin, { onDelete: "cascade"});
User.belongsTo(Admin);

module.exports = Admin;