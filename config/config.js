require('dotenv').config();

module.exports = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DIALECT,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false // This line will fix new error
            }
        }
    },
    production: {
        username: "288480",
        password: "4_Q<M)DiRo3S",
        database: "bedu-fase3-g9-backend_school",
        host: "mysql-bedu-fase3-g9-backend.alwaysdata.net",
        port: 3306,
        dialect: "mysql",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false // This line will fix new error
            }
        }
    }
}