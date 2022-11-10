const route = require('express').Router()
const {createStudent} = require('../controllers/studentController');

route.post('/', createStudent);

module.exports = route;