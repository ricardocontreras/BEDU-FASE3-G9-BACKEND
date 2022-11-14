'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('StudentsQualifications', {
      studentId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Students',
          key: 'studentId'
        }
      },
      subjectId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Subjects',
          key: 'subjectId'
        }
      },
      qualifications:{
        type: Sequelize.INTEGER
      },
      bimester:{
        type: Sequelize.INTEGER
      },
      groupId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'StudentsGroup',
          key: 'id'
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
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('StudentsQualifications');
  }
};
