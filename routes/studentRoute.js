const route = require('express').Router()
const {createStudent, getStudent, getAllStudents, assignGroupToStudent} = require('../controllers/studentController');

/**
 * @swagger
 * /api/Users:
 *  post:
 *    tags:
 *      - Users
 *    summary: Create user.
 *    description: Creates a new user.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
  *          schema:
 *            User:
 *              type: object
 *              properties:
 *            name:
 *              type: string
 *              description: user name
 *              example: Keny
 *    produces:
 *      - application/json
 *    responses:
 *      201:
 *        description: User information.
 *        type: HTTP Code
 */
route.post('/', createStudent);
route.post('/assign', assignGroupToStudent);

route.get('/:idStudent', getStudent);
route.get('/', getAllStudents);

module.exports = route;