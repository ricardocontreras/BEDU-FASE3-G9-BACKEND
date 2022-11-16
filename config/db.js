const config = require('./config');
const { Sequelize } = require('sequelize');

const attendanceModel = require('../models/AttendanceModel');
const credentialModel = require('../models/CredentialModel');
const employeeModel = require('../models/EmployeeModel');
const roleModel = require('../models/RoleModel');
const studentModel = require('../models/StudentsModel');
const subjectModel = require('../models/SubjectModel');
const groupModel = require('../models/GroupModel');
const studentsGroup = require('../models/StudentsGroupModel');

const sequelize = new Sequelize({
    database: config[process.env.NODE_ENV].database,
    username: config[process.env.NODE_ENV].username,
    password: config[process.env.NODE_ENV].password,
    host: config[process.env.NODE_ENV].host,
    port: config[process.env.NODE_ENV].port,
    dialect: config[process.env.NODE_ENV].dialect,
    dialectOptions: config[process.env.NODE_ENV].dialectOptions
});

const models = [
    studentModel, 
    employeeModel, 
    roleModel, 
    attendanceModel, 
    credentialModel, 
    subjectModel, 
    groupModel,
    studentsGroup
];

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