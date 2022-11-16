const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
  const Roles = sequelize.define('Roles', {
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
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
      beforeCreate: function (role) {
        role.createdAt = new Date();
        role.updatedAt = new Date();
      },
      beforeUpdate: function (role) {
        role.updatedAt = new Date();
      },
    }
  });
  return Roles;
};
