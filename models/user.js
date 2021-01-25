const {DataTypes, Model} = require('sequelize');
const sequelize = require('./sequelize');

class User extends Model {

}

User.init( {
        userID: {
            type: DataTypes.INTEGER,
            unique: "userIDUniqueValue",
            validate: {notEmpty: {msg: "userID must not be empty."}}
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {notEmpty: {msg: "Username must not be empty."}}
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            validate: {notEmpty: {msg: "Username must not be empty."}}
        },
        password: {
            type: DataTypes.STRING,
            validate: {notEmpty: {msg: "Password must not be empty."}}
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }
    ,sequelize)