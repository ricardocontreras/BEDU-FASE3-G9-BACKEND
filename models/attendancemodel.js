'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AttendanceModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AttendanceModel.init({
    dateAttendance: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'AttendanceModel',
  });
  return AttendanceModel;
};