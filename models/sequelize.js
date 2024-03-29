// Load ORM
const Sequelize = require('sequelize');
const config = require ('../config/config.json')[process.env.NODE_ENV || "development"];

// Environment variable to define the URL of the data base to use.
// To use SQLite data base:
//    DATABASE_URL = sqlite:quiz.sqlite
// To use  Heroku Postgres data base:
//    execute ¨heroku config:get DATABASE_URL -a tfg-hugo-pascual-back¨
//    DATABASE_URL = postgres://user:passwd@host:port/database

const url = process.env.DATABASE_URL || "sqlite:quiz.sqlite";

// const sequelize = new Sequelize(config.database, config.username, config.password, {
//     host: config.host,
//     port: config.port,
//     dialect: config.dialect,
//     dialectOptions: {
//         ssl: true
//     }
// });

const sequelize = new Sequelize({ ...config});

module.exports = sequelize;
