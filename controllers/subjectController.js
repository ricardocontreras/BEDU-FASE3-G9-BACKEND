const sequelize = require('../config/db');

async function createSubject(req, res) {
  try {
    const body = req.body;
    await sequelize.models.Subjects.create(body)
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

async function getSubject(req, res) {
  try {
    const {subjectId} = req.params;

    await sequelize.models.Subjects.findOne({
      where: {
        subjectId: subjectId
      }
    })
    .then(data => res.status(200).json(data))
    .catch (err => {
      if (subjectId == null) {
        res.status(404).json({ error: err.message });
      } else if (!Number.isInteger(parseInt(subjectId))) {
        res.status(400).json({ error: err.message });
      }
      throw new Error('An exception has been thrown: ' + err.message);
    });
  } catch (err) {
    console.error('An exception has been thrown: ' + err.message);
    return res.status(500).json({
      error: "A problem has ocurred please try again or contact your administrator."
    })
  }
};

async function getAllSubjects(req, res) {
  try {
    const roles = await sequelize.models.Subjects.findAll();
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
  createSubject,
  getSubject,
  getAllSubjects
};