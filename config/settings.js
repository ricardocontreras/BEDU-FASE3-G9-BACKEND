require('dotenv').config();
let settings = {};

if (process.env.NODE_ENV === 'production') {
    settings = {
        PORT: 3000,
        DB_NAME: "bedu-fase3-g9-backend_school",
        DB_USER: "288480",
        DB_PASSWORD: "4_Q<M)DiRo3S",
        DB_HOST: "mysql-bedu-fase3-g9-backend.alwaysdata.net",
        DB_PORT: 3306,
        DIALECT: "mysql"
    };
}else {
    settings = {
        PORT: process.env.PORT,
        DB_NAME: process.env.DB_NAME,
        DB_USER: process.env.DB_USER,
        DB_PASSWORD: process.env.DB_PASSWORD,
        DB_HOST: process.env.DB_HOST,
        DB_PORT: process.env.DB_PORT,
        DIALECT: process.env.DIALECT
    };
}

module.exports = settings;