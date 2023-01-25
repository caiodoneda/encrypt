const crypto = require('crypto');

module.exports = function getCipherKey(password) {
    return crypto.createHash('sha256').update(password).digest();
}
