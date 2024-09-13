const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Sport_type = sequelize.define('Sport_type', {
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

module.exports = Sport_type;