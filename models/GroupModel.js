const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
  const Group = sequelize.define('Groups', {
    groupId:{
        type: DataTypes.INTEGER,
        defaultValue: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    letter: DataTypes.STRING,
    grade: DataTypes.STRING,
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE
    },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
    }
  });
  return Group;
};
