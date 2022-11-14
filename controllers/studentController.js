const sequelize = require('../config/db');
const validator = require('validator');
const { ConnectionError } = require('sequelize');

async function createStudent(req, res) {
    try {
        const body = req.body;
        console.log(body);
        const users = await sequelize.models.Students.create(body)
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

const getStudent = async (req, res) => {
    try {
        const {idStudent} = req.params;
        
        if(!Number.isInteger(parseInt(idStudent))){
          res.status(400).json({message: 'Bad Request'});
        }

        const student = await sequelize.models.Students.findByPk(idStudent);
        if(student == null){
          res.status(204).json({message: 'Not found'});
        }else if(Object.keys(student).length > 0){
          res.status(200).json(student);
        }
    } catch (err) {
      console.error("An exceptions has been thrown: "+err.message);
    }
};

const getAllStudents = async(req, res) => {
    try {
        const students = await sequelize.models.Students.findAll({
          where: {
            isActive: true
          }
        });
        if(students.length <= 0){
          res.status(204).json([]);
        }else{
          res.status(200).json(students);
        }
    } catch (err) {
      console.error('An exception has been thrown: '+ err.message);
    }
};

module.exports = {
    createStudent,
    getStudent,
    getAllStudents
};