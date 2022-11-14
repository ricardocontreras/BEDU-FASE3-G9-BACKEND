'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('StudentsGroup', {
      id:{
        type: Sequelize.INTEGER,
        defaultValue: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      studentId:{
        type: Sequelize.INTEGER,
        references:{
          model: 'Students',
          key: 'studentId'
        }
      },
      groupId:{
        type: Sequelize.INTEGER,
        references:{
          model: 'Groups',
          key: 'groupId'
        }
      },
      period: Sequelize.DATE,
      isActive: Sequelize.BOOLEAN
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('StudentsGroup');
  }
};
