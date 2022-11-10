'use strict';

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const students = sequelize.define('students', {
    idStudent: {
      type: DataTypes.UUID,
      defaultValue: sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING
    },
    paternalSurname: {
      type: DataTypes.STRING
    },
    maternalSurname: {
      type: DataTypes.STRING
    },
    dateOfBirth: {
      type: DataTypes.DATE
    },
    address: {
      type: DataTypes.STRING
    },
    tutor: {
      type: DataTypes.STRING
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
    sequelize,
    modelName: 'students',
  });
  return students;
};