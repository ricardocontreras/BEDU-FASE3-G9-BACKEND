const {DataTypes, Sequelize} = require('sequelize');

module.exports = (sequelize) => sequelize.define('Attendance', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  idUser:{
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  dateAttendance: {
    type: DataTypes.DATE
  },
  attended:{
    type: DataTypes.BOOLEAN
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  }
});
  