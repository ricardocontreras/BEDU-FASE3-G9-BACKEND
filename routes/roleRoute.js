const route = require('express').Router()
const {createRole, getRole, getAllRoles} = require('../controllers/roleController');

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
route.post('/', createRole);

route.get('/:roleId', getRole);
route.get('/', getAllRoles);

module.exports = route;