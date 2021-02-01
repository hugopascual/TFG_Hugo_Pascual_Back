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

// const sequelize = new Sequelize(url);
// const sequelize = new Sequelize('dd0bo2j4bc3sva', "spfbjvzquhwuus", '623d66f7f015139e151286562ea6af53424c76710b97fc50a479afbf1aa7acf1', {
//     host: 'ec2-52-72-190-41.compute-1.amazonaws.com',
//     port: '5432',
//     dialect: 'postgres',
//     dialectOptions: {
//         ssl: true
//     }
// });

const sequelize = new Sequelize({ ...config});

module.exports = sequelize;
