const { Sequelize } = require('sequelize');

sequelize = new Sequelize({
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

module.exports = sequelize;