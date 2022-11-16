const route = require('express').Router()
const {createRole, getRole, getAllRoles, updateRoles, deleteRoles} = require('../controllers/roleController');

/**
 * @swagger
 * /api/Roles:
 *  post:
 *    tags:
 *      - Roles
 *    summary: Create new Role.
 *    description: With this method, we create a new Role.
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
 *          description: A object of Role.
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
 *          description: Role creation error
 */
route.post('/', createRole);

/**
 * @swagger
 * /api/Roles:roleId:
 *  get:
 *    tags:
 *      - Roles
 *    summary: Get a specific role
 *    description: With this method, we get a specific role.
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
 *          description: A object of Role.
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
 *          description: Role creation error
 */
route.get('/:roleId', getRole);

/**
 * @swagger
 * /api/Roles:
 *  get:
 *    tags:
 *      - Roles
 *    summary: Get all roles.
 *    description: With this method, we get all roles.
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
 *          description: A object of Role.
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
 *          description: Role creation error
 */
route.get('/', getAllRoles);

/**
 * @swagger
 * /api/Roles:
 *  put:
 *    tags:
 *      - Roles
 *    summary: Update a specific role.
 *    description: With this method, we update a specific role.
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
 *          description: A object of Role.
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
 *          description: Role creation error
 */
route.put('/', updateRoles);

/**
 * @swagger
 * /api/Roles:
 *  delete:
 *    tags:
 *      - Roles
 *    summary: Delete a specific role.
 *    description: With this method, we delete a specific role.
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
 *          description: A object of Role.
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
 *          description: Role creation error
 */
route.delete('/:roleId', deleteRoles);

module.exports = route;