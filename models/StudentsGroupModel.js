const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const StudentGroup = sequelize.define('StudentsGroup', {
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
  }, {
    hooks: {
      beforeCreate: function (student) {
        student.createdAt = new Date();
        student.updatedAt = new Date();
      },
      beforeUpdate: function (student) {
        student.updatedAt = new Date();
      },
    }
  });
  return StudentGroup;
};