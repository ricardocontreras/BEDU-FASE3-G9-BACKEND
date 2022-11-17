const route = require('express').Router();
const { loginUser } = require('../controllers/authController');

/**
 * @swagger
 * /api/Auth:
 *  post:
 *    tags:
 *      - Auth
 *    summary: Authenticate a Employees.
 *    description: With this method, we authenticate a Employees.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *              type: object
 *              properties:
 *                  email:
 *                      type: string
 *                      description: Name of the employee
 *                      example: Juan
 *                  password:
 *                      type: string
 *                      description: Employee's father's last name
 *                      example: Perez
 *    produces:
 *      - application/json
 *    responses:
 *      201:
 *          description: A object of Employees.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          token:
 *                              type: int
 *                              description: Id of the employee
 *                              example: 1
 *      400:
 *          description: Could not create Employees correctly
 *      500:
 *          description: Employees creation error
 */
route.post('/login', loginUser);

module.exports = route;