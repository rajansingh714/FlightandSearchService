'use strict';

const { name } = require('nodeman/lib/mustache');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airports',[
      {
        name: 'Patna Airport',
        cityId: 7,
        createdAt: new Data(),
        updatedAt: new Data()
      },
      {
        name: 'Kempegowda Internation Airport',
        cityId: 4,
        createdAt: new Data(),
        updatedAt: new Data()
      },
      {
        name: 'Mysuru Airport',
        cityId: 5,
        createdAt: new Data(),
        updatedAt: new Data()
      },
      {
        name: 'Indira Gandhi Internation Airport',
        cityId: 9,
        createdAt: new Data(),
        updatedAt: new Data()
      },

    ],{});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
