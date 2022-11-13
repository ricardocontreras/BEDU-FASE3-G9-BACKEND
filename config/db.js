const config = require('./settings');
const { Sequelize } = require('sequelize');

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

const userModel = require('../models/userModel');

const models = [userModel];

for(let model of models)
    model(sequelize);

const {users} = sequelize.models;

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;