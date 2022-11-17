const {DataTypes, Sequelize} = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize) => {
  const Credentials = sequelize.define('Credentials', {
    credentialId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    employeeId:{
      type: DataTypes.INTEGER,
      references:{
        model: 'Employees',
        key: 'employeeId'
      }
    },
    email:{
      type: DataTypes.STRING,
      unique: true,
      validate:{
        isEmail: true
      }
    },
    password: DataTypes.STRING,
    token: DataTypes.STRING,
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
      beforeCreate: (user) => {
        console.log(user);
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
      }
    }
  });

  Credentials.prototype.validPassword = function (password) {
    console.log("Credentials " + password);
    return bcrypt.compareSync(password, this.password);
  }

  return Credentials;
}
  