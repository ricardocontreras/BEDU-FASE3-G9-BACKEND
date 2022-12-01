'use strict';

const bcrypt = require('bcrypt');
const { DataTypes } = require('sequelize');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CredentialModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CredentialModel.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (credential) => {
        const salt = bcrypt.genSaltSync()
        credential.password = bcrypt.hashSync(credential.password, salt)
      }
    }
  }, {
    sequelize,
    modelName: 'CredentialModel',
  });
  return CredentialModel;
};