const sequelize = require('../config/db');

async function createGroup(req, res) {
  try {
    const body = req.body;
    await sequelize.models.Groups.create(body)
      .then(data => res.status(201).json(data))
      .catch(err =>
        res.status(400).json({
          error: err.message
        })
      );
  } catch (err) {
    console.error('An exception has been thrown: ' + err.message);
    return res.status(500).json({
      error: "A problem has ocurred please try again or contact your administrator."
    })
  }
};

async function getAllGroups(req, res) {
  try {
    const groups = await sequelize.models.Subjects.findAll();
    if (groups.length <= 0) {
      res.status(204).json([]);
    } else {
      res.status(200).json(groups);
    }
  } catch (err) {
    console.error('An exception has been thrown: ' + err.message);
  }
};

module.exports = {
    createGroup,
    getAllGroups
};