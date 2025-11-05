const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
    if (str === '') return '';

    let result = '';
    let count = 1;
    let currentChar = str[0];

    for (let i = 1; i < str.length; i++) {
        if (str[i] === currentChar) {
            count++;
        } else {
            result += (count > 1 ? count : '') + currentChar;
            currentChar = str[i];
            count = 1;
        }
    }

    result += (count > 1 ? count : '') + currentChar;

    return result;
}

module.exports = {
    encodeLine
};