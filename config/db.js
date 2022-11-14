const config = require('./settings');
const { Sequelize } = require('sequelize');
const attendanceModel = require('../models/AttendanceModel');
const credentialModel = require('../models/CredentialsModel');
const employeeModel = require('../models/EmployeesModel');
const roleModel = require('../models/RolesModel');
const studentModel = require('../models/StudentsModel');

const sequelize = new Sequelize({
    database: config.DB_NAME,
    username: config.DB_USER,
    password: config.DB_PASSWORD,
    host: config.DB_HOST,
    port: config.DB_PORT,
    dialect: config.DIALECT,
    dialectOptions: {
        ssl: {
            require: true, 
            rejectUnauthorized: false // This line will fix new error
        }
    },
});

const models = [studentModel, employeeModel, roleModel, attendanceModel, credentialModel];

for(let model of models){
    model(sequelize);
}

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;