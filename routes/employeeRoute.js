const route = require('express').Router()
const {createEmployee, getEmployee, getAllEmployees} = require('../controllers/employeeController');

/**
 * @swagger
 * /api/Employees:
 *  post:
 *    tags:
 *      - Employees
 *    summary: Create new Employees.
 *    description: With this method, we create a new Employees.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *              type: object
 *              properties:
 *                  description:
 *                      type: string
 *                      description: Professor of the role of the employee within the school.
 *                      example: Professor of school.
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
 *                          roleId:
 *                              type: int
 *                              description: Id del empleado
 *                              example: 1
 *                          description:
 *                              type: string
 *                              description: Descripción del role
 *                              example: Profesor
 *                          createdAt:
 *                              type: date
 *                              description: Fecha de registro del role
 *                              example: 2022-11-16T04:16:45.457Z
 *      400:
 *          description: Could not create role correctly
 *      500:
 *          description: Employees creation error
 */
route.post('/', createEmployee);

route.get('/:idEmployee', getEmployee);
route.get('/', getAllEmployees);

module.exports = route;