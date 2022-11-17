const sequelize = require('../config/db');
const jwt = require('jsonwebtoken');

async function loginUser(req, res) {
    try {
        const body = req.body;
        const user = await sequelize.models.Credentials.findOne({
            where: {
                email: body.email
            }
        })

        if (!user) {
            return res.status(401).json({ messagge: 'Unauthorized' });
        }

        if (!user.validPassword(body.password)) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ employeeId: user.employeeId }, 'secretkey', {
            expiresIn: 360000,
        });

        

        return res.json({
            message: 'Authenticated sucessfully',
            token: token,
        });
    } catch (err) {
        return res.status(500).json({
            error: err.message
        })
    }
}

module.exports = {
    loginUser
};