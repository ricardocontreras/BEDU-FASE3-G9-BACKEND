const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
  const Subject = sequelize.define('Subjects', {
    subjectId: {
        type: DataTypes.INTEGER,
        defaultValue: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      description:{
        type: DataTypes.STRING,
        allowNull: false
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
  return Subject;
};
