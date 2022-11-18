const route = require('express').Router()
const {createStudent, getStudent, getAllStudents, assignGroupToStudent} = require('../controllers/studentController');

/**
 * @swagger
 * /api/Students:
 *  post:
 *    tags:
 *      - Students
 *    summary: Create new Students.
 *    description: With this method, we create a new Students.
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
 *    produces:
 *      - application/json
 *    responses:
 *      201:
 *          description: A object of Students.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          studentsId:
 *                              type: int
 *                              description: Id of the Students
 *                              example: 1
 *                          firstName:
 *                              type: string
 *                              description: Name of the Students
 *                              example: Juan
 *                          paternalSurname:
 *                              type: string
 *                              description: Students's father's last name
 *                              example: Perez
 *                          maternalSurname:
 *                              type: string
 *                              description: Students's maternal last name
 *                              example: Lopez
 *                          dateOfBirth:
 *                              type: date
 *                              description: Students's date of birth
 *                              example: 1990-11-16
 *                          address:
 *                              type: string
 *                              description: Students's address
 *                              example: México
 *                          gender:
 *                              type: string
 *                              description: Students's gender
 *                              example: Masculino
 *                          isActive:
 *                              type: boolean
 *                              description: Students's status
 *                              example: true
 *                          createdAt:
 *                              type: date
 *                              description: Students's start date
 *                              example: 2022-11-16T04:16:45.457Z
 *                          updatedAt:
 *                              type: date
 *                              description: Students's update date
 *                              example: 2022-11-16T04:16:45.457Z
 *      400:
 *          description: Could not create Students correctly
 *      500:
 *          description: Students creation error
 */
route.post('/', createStudent);
route.post('/assign', assignGroupToStudent);

route.get('/:idStudent', getStudent);
route.get('/', getAllStudents);

module.exports = route;