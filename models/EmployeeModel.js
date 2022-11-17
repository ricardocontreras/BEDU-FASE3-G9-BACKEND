'use strict';
const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
  const Employee = sequelize.define('Employees', {
    employeeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    secondName: {
      type: DataTypes.STRING,
      allowNull: true
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
    role: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Roles',
        key: 'roleId'
      }
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
      beforeCreate: function (employee) {
        employee.createdAt = new Date();
        employee.updatedAt = new Date();
      },
      beforeUpdate: function (employee) {
        employee.updatedAt = new Date();
      },
    }
  });
  return Employee;
};