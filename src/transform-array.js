const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!");
    }

    const commands = new Set([
        '--discard-next',
        '--discard-prev',
        '--double-next',
        '--double-prev'
    ]);

    const result = [];
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        const current = arr[i];

        if (!commands.has(current)) {
            result.push(current);
        } else {
            if (current === '--discard-next') {
                i++;
            } else if (current === '--discard-prev') {
                if (result.length > 0) {
                    result.pop();
                }
            } else if (current === '--double-next') {
                if (i + 1 < len && !commands.has(arr[i + 1])) {
                    result.push(arr[i + 1], arr[i + 1]);
                }
            } else if (current === '--double-prev') {
                if (result.length > 0) {
                    result.push(result[result.length - 1]);
                }
            }
        }
    }

    return result;
}

module.exports = {
    transform
};