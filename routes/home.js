var express = require('express');
var router = express.Router();

/* GET home 1 */
router.get('/', function(req, res, next) {
    fileName = "./resources/home.json";
    res.sendFile(fileName)
});

/* GET home 2 */
/*
router.get('/', function(req, res, next) {
    status = HTTP_OK;
    fileName = "./resources/home.json";

    setTimeout(function () {
        sendResponse(fileName, req, res, status);
    }, timeWaiting);
});
 */

//constants
//constants and variables definition
var showRequest = false;
var showResponse = true;

var timeWaiting = 1000;

const HTTP_OK = 200;
/*
const HTTP_NO_CONTENT = 204;
const HTTP_BAD_REQUEST = 400;
const HTTP_UNAUTHORIZED = 401;
const HTTP_FORBIDDEN = 403;
const HTTP_NOT_FOUND = 404;
const HTTP_CONFLICT = 409;
const HTTP_PRECONDITION_FAILED = 412;
const TOKEN = "TokenGeneratedByHeroku";
 */

//useful functions
function sendResponse(fileName, req, res, status) {
    console.log("***JSON: " + fileName);
    console.log("***PARAMS: " + req.params);

    if (showRequest) {
        console.log("***Request.body:");
        console.log(req.body);
    }

    if (fs.existsSync(fileName)) {
        // Do something
        fs.readFile(fileName, 'utf8', function (err, data) {
            if (err) {
                console.log(err);
            } else {
                var obj = JSON.parse(data);
                res.header('Content-Type', 'application/json');

                if (showResponse) {
                    console.log("***Response: ");
                    console.log(obj);
                    console.log("***Status response:");
                    console.log(status);
                }
                res.status(status).json(obj);
            }
        });
    } else {
        console.log("not found");
        fs.readFile("error.json", 'utf8', function (err, data) {
            if (err) {
                console.log(err);
            } else {
                var obj = JSON.parse(data);
                res.header('Content-Type', 'application/json');
                res.status(status).json(obj);
            }
        });
    }
}

module.exports = router;
