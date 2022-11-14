const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Student = sequelize.define('Students', {
    studentId: {
      type: DataTypes.DOUBLE,
      defaultValue: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    secondName:{
      type: DataTypes.STRING,
      allowNull: false
    },
    paternalSurname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    maternalSurname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
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
  return Student;
};