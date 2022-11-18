const sequelize = require('../config/db');

async function createEmployeeCredentials(req, res) {
    try {
        const body = req.body;
        console.log(body);
        await sequelize.models.Credentials.create(body)
            .then(data => res.status(201).json(data))
            .catch(err =>
                res.status(400).json({
                    error: err.message
                })
            );
    } catch (err) {
        return res.status(500).json({
            error: err.message
        });
    }
};

const getCredentialsByEmployeeId = async (req, res) => {
    try {
        const { idEmployee } = req.params;

        if (!Number.isInteger(parseInt(idEmployee))) {
            res.status(400).json({ message: 'Bad Request' });
        }

        const employee = await sequelize.models.Employees.findByPk(idEmployee);
        if (employee == null) {
            res.status(204).json({ message: 'Not found' });
        } else if (Object.keys(employee).length > 0) {
            res.status(200).json(employee);
        }
    } catch (err) {
        console.error("An exceptions has been thrown: " + err.message);
    }
};

module.exports = {
    createEmployeeCredentials,
    getCredentialsByEmployeeId
}