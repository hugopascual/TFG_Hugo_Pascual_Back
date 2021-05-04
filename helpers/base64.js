const fs = require('fs');

/*
 * Encode the given file.
 */
module.exports.base64_encode = function(file) {
    // read binary data
    return fs.readFileSync(file,{ encoding: 'base64' });
};
