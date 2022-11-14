'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('TeacherSubjects', {
      groupId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'StudentsGroup',
          key: 'id'
        }
      },
      idTeacher: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Employees',
          key: 'employeeId'
        }
      },
      subjectId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Subjects',
          key: 'subjectId'
        }
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('TeacherSubjects');
  }
};
