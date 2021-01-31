'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
          notEmpty: {msg: "Email must not be empty."}
        }
      },
      username: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
          notEmpty: {msg: "Username must not be empty."}
        }
      },
      password: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {msg: "Username must not be empty."}
        }
      },
      token: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {msg: "Username must not be empty."}
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
        {
          sync: {force: true}
        });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};