const sequelize = require('../config/db');
const validator = require('validator');
const { ConnectionError } = require('sequelize');

async function createRole(req, res) {
    try {
        const body = req.body;
        const role = await sequelize.models.Roles.create(body)
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

const getRole = async (req, res) => {
    try {
        const {idRole} = req.params;
        console.log(idRole);
        if(!Number.isInteger(parseInt(idRole))){
          res.status(400).json({message: 'Bad Request'});
        }

        const role = await sequelize.models.Roles.findByPk(idRole);
        if(role == null){
          res.status(204).json({message: 'Not found'});
        }else if(Object.keys(role).length > 0){
          res.status(200).json(role);
        }
    } catch (err) {
      console.error("An exceptions has been thrown: "+err.message);
    }
};

const getAllRoles = async(req, res) => {
    try {
        const roles = await sequelize.models.Roles.findAll();
        if(roles.length <= 0){
          res.status(204).json([]);
        }else{
          res.status(200).json(roles);
        }
    } catch (err) {
      console.error('An exception has been thrown: '+ err.message);
    }
};

module.exports = {
    createRole,
    getRole,
    getAllRoles
};