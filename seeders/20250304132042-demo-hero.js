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
    return queryInterface.bulkInsert("Heros", [
      {
        typeId: 1,
        title: "Judul",
        image: "/img/1.jpg",
        content:"Sekedar penjelasan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        typeId: 1,
        title: "Judul 2",
        image: "/img/1.jpg",
        content:"Sekedar penjelasan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
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
