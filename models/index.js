const {DataTypes, Model} = require('sequelize');
const sequelize = require('./sequelize');
const User = require('./user')(sequelize, DataTypes)
const Session = require('./session');


module.exports = sequelize;
