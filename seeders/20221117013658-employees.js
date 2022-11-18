'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Employees', [{
      firstName: 'Juan',
      secondName: null,
      paternalSurname: 'Perez',
      maternalSurname: 'Lopez',
      dateOfBirth: '1993-01-01',
      address: 'Mexico',
      gender: 'Masculino',
      isActive: true,
      role: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'Ana',
      secondName: null,
      paternalSurname: 'Perez',
      maternalSurname: 'Lopez',
      dateOfBirth: '1993-12-01',
      address: 'Mexico',
      gender: 'Femenino',
      isActive: true,
      role: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Employees', null, {});
  }
};
