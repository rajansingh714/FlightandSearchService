'use strict';

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
    await queryInterface.bulkInsert('Airplanes', [
       {
            modelNumber: "Airbus 385",
            capacity: 300,
            createdAt: new Data(),
            updatedAt: new Data()
       },
       {
            modelNumber: "Boeing 850",
            capacity: 350,
            createdAt: new Data(),
            updatedAt: new Data()
       },
       {
            modelNumber: "Airbus 145",
            capacity: 285,
            createdAt: new Data(),
            updatedAt: new Data()
       },
       {
            modelNumber: "Boeing 565",
            capacity: 330,
            createdAt: new Data(),
            updatedAt: new Data()
       },
       {
            modelNumber: "Airbus A330",
            capacity: 250,
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
