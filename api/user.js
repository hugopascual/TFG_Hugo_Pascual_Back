const {models} = require('../models');
//const Sequelize = require('sequelize');

const authentication = require('../helpers/authentication');

//-----------------------------------------------------------

// GET /api/users
exports.getAll = async (req, res, next) => {

    try {
        const users = await models.User.findAll();
        res.json(users);
    } catch (error) {
        next(error);
    }
};

//-----------------------------------------------------------

// POST /users/create
exports.create = async (req, res) => {

    const {email, username, password} = req.body;

    let user = models.User.build({
        email,
        username,
        password
    });

    // Password must not be empty.
    if (!password) {
        return res.send('Empty password')
    }

    try {
        // Create the token field:
        user.token = authentication.createToken();

        // Save into the data base
        user = await user.save({fields: ["email", "username", "password", "token","salt"]});

        res.send(200)
    } catch (error) {
        res.send(error.message)
    }
};

//-----------------------------------------------------------