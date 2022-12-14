const sequelize = require('../config/db');
//const validator = require('validator');

async function createEmployee(req, res) {
  try {
    const body = req.body;
    await sequelize.models.Employees.create(body)
      .then(data => res.status(201).json(data))
      .catch(err =>
        res.status(400).json({
          error: err.message
        })
      );
  } catch (err) {
    return res.status(500).json({
      error: err.message
    })
  }
};

const getEmployee = async (req, res) => {
  try {
    const employeeId = req.params.employeeId;

    if (!Number.isInteger(parseInt(employeeId))) {
      res.status(400).json({ message: 'Bad Request' });
    }

    const employee = await sequelize.models.Employees.findByPk(employeeId);
    if (employee == null) {
      res.status(204).json({ message: 'Not found' });
    } else if (Object.keys(employee).length > 0) {
      res.status(200).json(employee);
    }
  } catch (err) {
    console.error("An exceptions has been thrown: " + err.message);
  }
};

const getAllEmployees = async (req, res) => {
  try {
    const employees = await sequelize.models.Employees.findAll({
      where: {
        isActive: true
      }
    });
    if (employees.length <= 0) {
      res.status(204).json([]);
    } else {
      res.status(200).json(employees);
    }
  } catch (err) {
    console.error('An exception has been thrown: ' + err.message);
  }
};

module.exports = {
  createEmployee,
  getEmployee,
  getAllEmployees
};