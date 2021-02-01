const {DataTypes, Model} = require('sequelize');
const sequelize = require('./sequelize');
const User = require('./user')(sequelize, DataTypes)


module.exports = sequelize;
