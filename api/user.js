
const {models} = require('../models');
const Sequelize = require('sequelize');

//-----------------------------------------------------------

// Autoload the user with id equals to :userId
exports.load = async (req, res, next, userId) => {

    try {
        const user = await models.User.findByPk(userId, {
            attributes: ['id', 'email', 'isAdmin', 'username']
        });

        if (user) {
            req.load = {...req.load, user};
            next();
        } else {
            throw new Error('No exist userId=' + userId);
        }
    } catch (error) {
        next(error);
    }
};

//-----------------------------------------------------------

// GET /api/users
exports.index = async (req, res, next) => {

    try {
        const users = await models.User.findAll({
            attributes: ['id', 'email', 'isAdmin', 'username']
        });
        res.json(users);
    } catch (error) {
        next(error);
    }
};

//-----------------------------------------------------------
