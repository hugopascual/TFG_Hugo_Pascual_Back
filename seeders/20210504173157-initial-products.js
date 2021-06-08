'use strict';

const base64 = require('../helpers/base64');

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

    await queryInterface.bulkInsert('Products', [
      {
        category: 'MOTHERBOARD',
        model: 'MSI B450 Tomahawk',
        price: '125',
        description: 'Perfecta para tu Ryzen 1600AF.',
        image: base64.base64_encode('public/resources/motherboard.jpeg'),
        owner: 'h@email.com',
        status: 'ONSALE',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        category: 'CPU',
        model: 'Ryzen 1600AF',
        price: '150',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: base64.base64_encode('public/resources/cpu.jpeg'),
        owner: 'a@email.com',
        status: 'ONSALE',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        category: 'GPU',
        model: 'Nvidia RTX 2060 Super',
        price: '300',
        description: 'Para tus videojuegos',
        image: base64.base64_encode('public/resources/gpu.jpeg'),
        owner: 'h@email.com',
        status: 'ONSALE',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        category: 'RAM',
        model: 'Corsair Vengance RGB Pro 2x8',
        price: '70',
        description: 'La necesitas muchach@',
        image: base64.base64_encode('public/resources/ram.jpeg'),
        owner: 'a@email.com',
        status: 'ONSALE',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        category: 'GPU',
        model: 'Nvidia RTX 3080Ti',
        price: '3000',
        description: 'La nueva gráfica de NVIDIA que ha sacado a la venta de forma cuantica, porque antes de la hora oficial de salida todas estaban agotadas. Pero aún con todos esos misterios de la vida yo he conseguido una hora y te la vendo nuevecita sin sacar de la caja unicamente por el DOBLE del precio oficial, pero lo siento asío es la oferta y la demanda.',
        image: base64.base64_encode('public/resources/gpu_2.jpeg'),
        owner: 'h@email.com',
        status: 'ONSALE',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Products', null, {});
  }
};
