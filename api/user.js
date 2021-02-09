
const {models} = require('../models');
//const Sequelize = require('sequelize');

//-----------------------------------------------------------

// GET /api/users
exports.index = async (req, res, next) => {

    try {
        const users = await models.User.findAll({
            attributes: ['id', 'email', 'username', 'password', 'token', 'createdAt', 'updatedAt']
        });
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
        //user.token = authentication.createToken();
        user.token = "token de prueba"

        // Save into the data base
        user.save({fields: ["email", "username", "password", "token"]});
        res.send("User created")

    } catch (error) {
        res.send(error.message)
    }
};

//-----------------------------------------------------------