const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
    const mainString = String(str);

    const {
        repeatTimes = 1,
        separator = '+',
        addition = '',
        additionRepeatTimes = 1,
        additionSeparator = '|'
    } = options || {};

    const additionString = String(addition);

    let additionPart = '';
    if (additionString !== '') {
        const additionArray = Array(additionRepeatTimes).fill(additionString);
        additionPart = additionArray.join(additionSeparator);
    }

    const mainPart = mainString + additionPart;

    const resultArray = Array(repeatTimes).fill(mainPart);
    return resultArray.join(separator);
}

module.exports = {
    repeater
};