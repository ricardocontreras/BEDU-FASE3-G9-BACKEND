const sequelize = require('../config/db');
const validator = require('validator');

async function createUser(req, res) {
    try {
        const body = req.body;
        const users = await sequelize.models.users.create(body)
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

async function getUser(req, res) {
    try {
        var idUser = req.params.idUser
        await sequelize.models.users.findByPk(idUser)
            .then(data => {
                if(!validator.isUUID(idUser)){
                    throw new Error({'idUser': "Invalid GUID format."});
                }else if(!data){
                    throw new Error({'idUser': "Invalid idUser"});
                }else{
                    res.status(200).json(data);
                }
            })
            .catch(err => {
                if(!validator.isUUID(idUser)){
                    res.status(400).json({ 'message': "IdUser invalid format.", 'code': 400, 'status': 'Bad Request', 'error': err.message});
                }else{
                    res.status(404).json({ 'message': "IdUser not found.", 'code': 404, 'status': 'Not Found', 'error': err.message});
                }
            });
    } catch (err) {
        return res.status(500).json({
            error: err.message
        })
    }
};

async function getUsers(req, res) {
    try {
        await sequelize.models.users.findAll({
            where: {
              active: true
            }
          })
            .then(data => {
                    res.status(200).json(data);
            })
            .catch(err => {
                res.status(400).json({ 'message': "Not found.", 'code': 400, 'status': 'Bad Request', 'error': err.message});
            });
    } catch (err) {
        return res.status(500).json({
            error: err.message
        })
    }
};

module.exports = {createUser, getUser, getUsers};