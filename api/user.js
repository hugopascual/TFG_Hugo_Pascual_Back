
const {models} = require('../models');
const Sequelize = require('sequelize');

//-----------------------------------------------------------

// GET /api/users
exports.index = async (req, res, next) => {

    try {
        const users = await models.User.findAll({
            attributes: ['id', 'email', 'username']
        });
        res.json(users);
    } catch (error) {
        next(error);
    }
};

//-----------------------------------------------------------
