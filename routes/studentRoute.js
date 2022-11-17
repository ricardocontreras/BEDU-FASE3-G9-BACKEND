const route = require('express').Router()
const {createStudent, getStudent, getAllStudents, assignGroupToStudent} = require('../controllers/studentController');


route.post('/', createStudent);
route.post('/assign', assignGroupToStudent);

route.get('/:idStudent', getStudent);
route.get('/', getAllStudents);

module.exports = route;