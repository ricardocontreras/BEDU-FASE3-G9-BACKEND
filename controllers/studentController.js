const sequelize = require('../config/db');

async function createStudent(req, res) {
    try{
        const body = req.body;
        const students = await sequelize.models.students.create(body)
        .then(data => res.json(data))
        .catch(err => res.json({ message: 'Error', data: err }));
    }catch(error){
        res.json({ message: 'Error', data: error })
    }
}

module.exports = {createStudent};