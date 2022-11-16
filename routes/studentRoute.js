const route = require('express').Router()
const {createStudent, getStudent, getAllStudents} = require('../controllers/studentController');


route.post('/', createStudent);

route.get('/:idStudent', getStudent);
route.get('/', getAllStudents);

module.exports = route;