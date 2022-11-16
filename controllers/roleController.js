const sequelize = require('../config/db');

async function createRole(req, res) {
  try {
    const body = req.body;
    await sequelize.models.Roles.create(body)
      .then(data => {
        res.status(201).json(data)
      })
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
    await sequelize.models.Roles.findOne({
      where: {
        roleId: roleId
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
    let isActive = req.query.isActive;
    if(!isActive){
      await sequelize.models.Roles.findAll()
      .then(data => res.status(200).json(data))
      .catch (err => {
        if (!data) {
          res.status(404).json({ error: err.message });
        }
        throw new Error('An exception has been thrown: ' + err.message);
      });
    }else{
      isActive = req.query.isActive.toLowerCase() === 'false' ? false : true;
      await sequelize.models.Roles.findAll({
        where: {
          isActive: isActive
        }
      })
      .then(data => res.status(200).json(data))
      .catch (err => {
        if (!data) {
          res.status(404).json({ error: err.message });
        }
        throw new Error('An exception has been thrown: ' + err.message);
      });
    }
  } catch (err) {
    console.error('An exception has been thrown: ' + err.message);
    return res.status(500).json({
      error: err.message
    })
  }
};

async function updateRoles(req, res) {
  try {
    const body = req.body;
    await sequelize.models.Roles.update(body, {
      where: {
        roleId: body.roleId
      }
    })
    .then(data => res.status(201).json(data))
  } catch (err) {
    console.error('An exception has been thrown: ' + err.message);
    return res.status(500).json({
      error: err.message
    })
  }
};

async function deleteRoles(req, res) {
  try {
    const roleId = req.params.roleId;
    await sequelize.models.Roles.update({isActive: false}, {
      where: {
        roleId: roleId
      }
    })
    .then(data => res.status(201).json(data))
  } catch (err) {
    console.error('An exception has been thrown: ' + err.message);
    return res.status(500).json({
      error: err.message
    })
  }
};

module.exports = {
  createRole,
  getRole,
  getAllRoles,
  updateRoles,
  deleteRoles
};