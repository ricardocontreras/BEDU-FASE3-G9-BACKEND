const sequelize = require('../config/db');

async function createRole(req, res) {
  try {
    const body = req.body;
    await sequelize.models.Roles.create(body)
      .then(data => res.status(201).json(data))
      .catch(err =>
        res.status(400).json({
          error: err.message
        })
      );
  } catch (err) {
    console.error('An exception has been thrown: ' + err.message);
    return res.status(500).json({
      error: err.message
    })
  }
};

async function getRole(req, res) {
  try {
    const roleId = req.params.roleId;
    //const isActive = req.query.isActive;

    await sequelize.models.Roles.findOne({
      where: {
        roleId: roleId
        //, isActive: true
      }
    })
    .then(data => res.status(200).json(data))
    .catch (err => {
      if (roleId == null) {
        res.status(404).json({ error: err.message });
      } else if (!Number.isInteger(parseInt(roleId))) {
        res.status(400).json({ error: err.message });
      }
      throw new Error('An exception has been thrown: ' + err.message);
    });
  } catch (err) {
    console.error('An exception has been thrown: ' + err.message);
    return res.status(500).json({
      error: err.message
    })
  }
};

async function getAllRoles(req, res) {
  try {
    const roles = await sequelize.models.Roles.findAll();
    if (roles.length <= 0) {
      res.status(204).json([]);
    } else {
      res.status(200).json(roles);
    }
  } catch (err) {
    console.error('An exception has been thrown: ' + err.message);
  }
};

module.exports = {
  createRole,
  getRole,
  getAllRoles
};