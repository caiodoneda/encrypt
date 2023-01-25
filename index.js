const encrypt = require('./src/encrypt');
const decrypt = require('./src/decrypt');

// pull the mode, file and password from the command arguments.
const [mode, file, password] = process.argv.slice(2);
if (mode === 'encrypt') {
    encrypt({ file, password });
}
if (mode === 'decrypt') {
    decrypt({ file, password });
}