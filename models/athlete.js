const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user')


const Athlete = sequelize.define('Athlete', {
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
    is_leader: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

User.hasOne(Athlete, { onDelete: "cascade"});
User.belongsTo(Athlete);

module.exports = Athlete;