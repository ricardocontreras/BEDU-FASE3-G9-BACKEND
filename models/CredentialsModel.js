const {DataTypes, Sequelize} = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize) => {
  const Credentials = sequelize.define('Credentials', {
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
    token: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (employee) => {
        const salt = bcrypt.genSaltSync()
        employee.password = bcrypt.hashSync(employee.password, salt)
      }
    }
  });

  Credentials.prototype.validPassword = (pass) => {
    return bcrypt.compareSync(pass, this.password);
  }

  return Credentials;
}
  