var express = require('express');
var router = express.Router();
var Const = require("../utils/Const.js")
var functions = require("../utils/Functions")

/* GET home */
router.get('/', function(req, res, next) {
    status = Const.HttpStates.HTTP_OK;
    let fileName = "./resources/profile.json";

    setTimeout(function () {
        functions.sendResponse(fileName, req, res, status);
    }, Const.Times.WAIT_TIME);
});

module.exports = router;
