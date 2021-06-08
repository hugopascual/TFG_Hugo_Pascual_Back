'use strict';

const crypt = require('../helpers/crypt');
const authentication = require('../helpers/authentication');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Users', [{
      email: 'h@email.com',
      username: 'hugo',
      password: crypt.encryptPassword('1234', 'aaaa'),
      token: authentication.createToken(),
      salt: 'aaaa',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'a@email.com',
      username: 'ana',
      password: crypt.encryptPassword('1234', 'bbbb'),
      token: authentication.createToken(),
      salt: 'bbbb',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
