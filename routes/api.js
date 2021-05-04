const express = require('express');
const router = express.Router();

const userApi = require('../api/user');
const sessionApi = require('../api/session');
const productApi = require('../api/product');

//-----------------------------------------------------------

// Debug trace.
router.all('*', function(req, res, next) {

    console.log("=== API ===>", req.url);
    console.log(req.body)
    console.log(req.params)
    console.log(req.method)
    next();
});
//-----------------------------------------------------------

// Routes to manage session.

// logout check
router.get('/login',sessionApi.checkLoginExpires);

// create login session
router.post('/login',
            sessionApi.create,
            sessionApi.createLoginExpires);

// logout
router.delete('/logout', sessionApi.destroy);
//-----------------------------------------------------------

// Routes for the users resource.

router.get('/users', userApi.getAll);
router.post('/users/registration', userApi.create);

//-----------------------------------------------------------

// Routes for the products resource.

router.get('/products/getAll', productApi.getAll);
router.get('/products/getList/:category', productApi.getList);
router.get('/products/getDetail/:id', productApi.getDetail);
router.post('/products/add', productApi.add);

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