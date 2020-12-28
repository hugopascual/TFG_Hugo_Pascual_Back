fs = require('fs')

//function to sendResponse from a JSON file
function sendResponse(fileName, req, res, status) {
    console.log("***JSON: " + fileName);
    console.log("***PARAMS: " + req.params);
    console.log("***Request.body:");
    console.log(req.body);

    if (fs.existsSync(fileName)) {
        // Do something
        fs.readFile(fileName, 'utf8', function (err, data) {
            if (err) {
                console.log(err);
            } else {
                let obj = JSON.parse(data);
                res.header('Content-Type', 'application/json');
                console.log("***Response: ");
                console.log(obj);
                console.log("***Status response:");
                console.log(status);
                res.status(status).json(obj);
            }
        });
    } else {
        console.log("File Not Found");
        /*
        fs.readFile("error.json", 'utf8', function (err, data) {
            if (err) {
                console.log(err);
            } else {
                var obj = JSON.parse(data);
                res.header('Content-Type', 'application/json');
                res.status(status).json(obj);
            }
        });
         */
    }
}

module.exports = {
    "sendResponse": sendResponse
}