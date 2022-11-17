const route = require('express').Router()
const {createEmployee, getEmployee, getAllEmployees} = require('../controllers/employeeController');
const {createEmployeeCredentials, getCredentialsByEmployeeId} = require('../controllers/credentialController');

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
 *                  firstName:
 *                      type: string
 *                      description: Name of the employee
 *                      example: Juan
 *                  paternalSurname:
 *                      type: string
 *                      description: Employee's father's last name
 *                      example: Perez
 *                  maternalSurname:
 *                      type: string
 *                      description: Employee's maternal last name
 *                      example: Lopez
 *                  dateOfBirth:
 *                      type: date
 *                      description: Employee's date of birth
 *                      example: 1990-11-16
 *                  address:
 *                      type: string
 *                      description: Employee's address
 *                      example: México
 *                  gender:
 *                      type: string
 *                      description: Employee's gender
 *                      example: Masculino
 *                  role:
 *                      type: Roles
 *                      description: Employee's role
 *                      example: 1
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
 *                          employeeId:
 *                              type: int
 *                              description: Id of the employee
 *                              example: 1
 *                          firstName:
 *                              type: string
 *                              description: Name of the employee
 *                              example: Juan
 *                          paternalSurname:
 *                              type: string
 *                              description: employee's father's last name
 *                              example: Perez
 *                          maternalSurname:
 *                              type: string
 *                              description: Employee's maternal last name
 *                              example: Lopez
 *                          dateOfBirth:
 *                              type: date
 *                              description: Employee's date of birth
 *                              example: 1990-11-16
 *                          address:
 *                              type: string
 *                              description: Employee's address
 *                              example: México
 *                          gender:
 *                              type: string
 *                              description: Employee's gender
 *                              example: Masculino
 *                          role:
 *                              type: Roles
 *                              description: Employee's Role
 *                              example: 1
 *                          isActive:
 *                              type: boolean
 *                              description: Employee's status
 *                              example: true
 *                          createdAt:
 *                              type: date
 *                              description: Employee's start date
 *                              example: 2022-11-16T04:16:45.457Z
 *                          updatedAt:
 *                              type: date
 *                              description: Employee's update date
 *                              example: 2022-11-16T04:16:45.457Z
 *      400:
 *          description: Could not create Employees correctly
 *      500:
 *          description: Employees creation error
 */
route.post('/', createEmployee);

/**
 * @swagger
 * /api/Employees:employeeId:
 *  get:
 *    tags:
 *      - Employees
 *    summary: Get a specific Employees.
 *    description: With this method, we get a specific Employees.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *              type: object
 *              properties:
 *                  firstName:
 *                      type: string
 *                      description: Name of the employee
 *                      example: Juan
 *                  paternalSurname:
 *                      type: string
 *                      description: Employee's father's last name
 *                      example: Perez
 *                  maternalSurname:
 *                      type: string
 *                      description: Employee's maternal last name
 *                      example: Lopez
 *                  dateOfBirth:
 *                      type: date
 *                      description: Employee's date of birth
 *                      example: 1990-11-16
 *                  address:
 *                      type: string
 *                      description: Employee's address
 *                      example: México
 *                  gender:
 *                      type: string
 *                      description: Employee's gender
 *                      example: Masculino
 *                  role:
 *                      type: Roles
 *                      description: Employee's role
 *                      example: 1
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *          description: A object of Employees.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          employeeId:
 *                              type: int
 *                              description: Id of the employee
 *                              example: 1
 *                          firstName:
 *                              type: string
 *                              description: Name of the employee
 *                              example: Juan
 *                          paternalSurname:
 *                              type: string
 *                              description: employee's father's last name
 *                              example: Perez
 *                          maternalSurname:
 *                              type: string
 *                              description: Employee's maternal last name
 *                              example: Lopez
 *                          dateOfBirth:
 *                              type: date
 *                              description: Employee's date of birth
 *                              example: 1990-11-16
 *                          address:
 *                              type: string
 *                              description: Employee's address
 *                              example: México
 *                          gender:
 *                              type: string
 *                              description: Employee's gender
 *                              example: Masculino
 *                          role:
 *                              type: Roles
 *                              description: Employee's Role
 *                              example: 1
 *                          isActive:
 *                              type: boolean
 *                              description: Employee's status
 *                              example: true
 *                          createdAt:
 *                              type: date
 *                              description: Employee's start date
 *                              example: 2022-11-16T04:16:45.457Z
 *                          updatedAt:
 *                              type: date
 *                              description: Employee's update date
 *                              example: 2022-11-16T04:16:45.457Z
 *      400:
 *          description: Could not create Employees correctly
 *      500:
 *          description: Employees creation error
 */
route.get('/:employeeId', getEmployee);

/**
 * @swagger
 * /api/Employees:
 *  get:
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
 *                  firstName:
 *                      type: string
 *                      description: Name of the employee
 *                      example: Juan
 *                  paternalSurname:
 *                      type: string
 *                      description: Employee's father's last name
 *                      example: Perez
 *                  maternalSurname:
 *                      type: string
 *                      description: Employee's maternal last name
 *                      example: Lopez
 *                  dateOfBirth:
 *                      type: date
 *                      description: Employee's date of birth
 *                      example: 1990-11-16
 *                  address:
 *                      type: string
 *                      description: Employee's address
 *                      example: México
 *                  gender:
 *                      type: string
 *                      description: Employee's gender
 *                      example: Masculino
 *                  role:
 *                      type: Roles
 *                      description: Employee's role
 *                      example: 1
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
 *                          employeeId:
 *                              type: int
 *                              description: Id of the employee
 *                              example: 1
 *                          firstName:
 *                              type: string
 *                              description: Name of the employee
 *                              example: Juan
 *                          paternalSurname:
 *                              type: string
 *                              description: employee's father's last name
 *                              example: Perez
 *                          maternalSurname:
 *                              type: string
 *                              description: Employee's maternal last name
 *                              example: Lopez
 *                          dateOfBirth:
 *                              type: date
 *                              description: Employee's date of birth
 *                              example: 1990-11-16
 *                          address:
 *                              type: string
 *                              description: Employee's address
 *                              example: México
 *                          gender:
 *                              type: string
 *                              description: Employee's gender
 *                              example: Masculino
 *                          role:
 *                              type: Roles
 *                              description: Employee's Role
 *                              example: 1
 *                          isActive:
 *                              type: boolean
 *                              description: Employee's status
 *                              example: true
 *                          createdAt:
 *                              type: date
 *                              description: Employee's start date
 *                              example: 2022-11-16T04:16:45.457Z
 *                          updatedAt:
 *                              type: date
 *                              description: Employee's update date
 *                              example: 2022-11-16T04:16:45.457Z
 *      400:
 *          description: Could not create Employees correctly
 *      500:
 *          description: Employees creation error
 */
route.get('/', getAllEmployees);

route.post('/Credentials/', createEmployeeCredentials);

module.exports = route;