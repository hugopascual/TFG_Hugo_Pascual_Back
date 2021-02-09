const express = require('express');
const router = express.Router();

const userApi = require('../api/user');

//-----------------------------------------------------------

// Debug trace.
router.all('*', function(req, res, next) {

    console.log("=== API ===>", req.url);
    console.log(req.body)
    console.log(req.params)
    next();
});

//-----------------------------------------------------------

// Routes for the users resource.

router.get('/users', userApi.index);
router.post('/users/create', userApi.create);

//-----------------------------------------------------------

// When you get here the api dont have response to that request.
router.all('*', function(req, res, next) {

    var err = new Error('Ruta API no encontrada');
    err.status = 404;
    next(err);
});

//-----------------------------------------------------------

// Error
router.use(function(err, req, res) {

    var emsg = err.message || "Error Interno";

    console.log(emsg);

    res.status(err.status || 500)
        .send({error: emsg})
        .end();
});

//-----------------------------------------------------------

module.exports = router;

//-----------------------------------------------------------