const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    database: "bedu-fase3-g9-backend_school",
    username: "288480",
    password: "4_Q<M)DiRo3S",
    host: "mysql-bedu-fase3-g9-backend.alwaysdata.net",
    port: 3306,
    dialect: "mysql",
    dialectOptions: {
        ssl: {
            require: true, 
            rejectUnauthorized: false // This line will fix new error
        }
    },
});

const studentModel = require('../models/students');

const models = [studentModel];

for(let model of models)
    model(sequelize);

const {students} = sequelize.models;

module.exports = sequelize;