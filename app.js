require('dotenv').config();
const express = require('express');
const sequelize = require('./config/db.js');
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', function (request, response){
    response.redirect('/api');
});

app.use('/api', require('./routes'))

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.info(`server is listening on port ${PORT}`);
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}