const jwt = require('jsonwebtoken')
const sequelize = require('../config/db')

const authenticate = (req, res, next) => {
    const { authorization } = req.headers

    jwt.verify(authorization, 'secretkey', async (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Unauthorized - ' + err })
        req.user = await sequelize.models.Credentials.findOne({
            where: {
                employeeId: decoded.employeeId
            }
        })
        next()
    })
}

module.exports = authenticate