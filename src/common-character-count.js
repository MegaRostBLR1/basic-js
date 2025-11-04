const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
    let str1 = s1;
    let str2 = s2;

    let commonCount = 0;

    for (let i = 0; i < str1.length; i++) {
        const char = str1[i];

        const indexInStr2 = str2.indexOf(char);

        if (indexInStr2 !== -1) {
            commonCount++;
            str2 = str2.slice(0, indexInStr2) + str2.slice(indexInStr2 + 1);
        }
    }

    return commonCount;
}

module.exports = {
    getCommonCharacterCount
};