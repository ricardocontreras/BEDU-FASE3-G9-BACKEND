const route = require('express').Router()
const {createEmployee, getEmployee, getAllEmployees, createEmployeeCredentials} = require('../controllers/employeeController');

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
route.post('/', createEmployee);
route.post('/creds', createEmployeeCredentials);

route.get('/:idEmployee', getEmployee);
route.get('/', getAllEmployees);

module.exports = route;