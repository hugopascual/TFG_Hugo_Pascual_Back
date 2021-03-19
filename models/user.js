'use strict';

const {Model} = require('sequelize');
const crypt = require('../helpers/crypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    verifyPassword(password) {
      return crypt.encryptPassword(password, this.salt) === this.password;
    }
  };

  User.init({
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {notEmpty: {msg: "Email must not be empty."}}
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      validate: {notEmpty: {msg: "Username must not be empty."}}
    },
    password: {
      type: DataTypes.STRING,
      validate: {notEmpty: {msg: "Password must not be empty."}},
      set(password) {
        // Random String used as salt.
        this.salt = Math.round((new Date().valueOf() * Math.random())) + '';
        this.setDataValue('password', crypt.encryptPassword(password, this.salt));
      }
    },
    token: {
      type: DataTypes.STRING,
      validate: {notEmpty: {msg: "Token must not be empty."}}
    },
    salt: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};
