'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Credentials', {
      credentialId:{
        type: Sequelize.INTEGER,
        defaultValue: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      employeeId:{
        type: Sequelize.INTEGER,
        references:{
          model: 'Employees',
          key: 'employeeId'
        }
      },
      email:{
        type: Sequelize.STRING,
        unique: true,
        validate:{
          isEmail: true
        }
      },
      password: Sequelize.STRING,
      token: Sequelize.STRING
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Credentials');
  }
};