const route = require('express').Router()
const {createSubject, getSubject, getAllSubjects} = require('../controllers/subjectController');

/**
 * @swagger
 * /api/Roles:
 *  post:
 *    tags:
 *      - Roles
 *    summary: Create new Role.
 *    description: Creates a new Roles.
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
route.post('/', createSubject);

route.get('/:subjectId', getSubject);
route.get('/', getAllSubjects);

module.exports = route;