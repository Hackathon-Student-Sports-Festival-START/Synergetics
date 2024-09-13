const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Admin = require('./admin');
const Athlete = require('./athlete');
const Participant = require('./participant');

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
        type: DataTypes.String,
        allowNull: false
    },
    email: {
        type: DataTypes.String,
        allowNull: true
    },
    role_id:
    {
        type: DataTypes.Integer,
        allowNull: false
    }
});

User.hasOne(Admin, {
    foreignKey: "id"
});
User.hasOne(Athlete);
User.hasOne(Participant);

module.exports = User;