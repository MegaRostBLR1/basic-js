const { NotImplementedError } = require('../lib');

function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!");
    }

    const res = [];
    const controls = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];

    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];

        if (!controls.includes(current)) {
            res.push(current);
            continue;
        }

        if (current === '--discard-next') {
            i++;
        } else if (current === '--discard-prev') {
            if (res.length > 0) {
                res.pop();
            }
        } else if (current === '--double-next') {
            if (i + 1 < arr.length && !controls.includes(arr[i + 1])) {
                res.push(arr[i + 1]);
            }
        } else if (current === '--double-prev') {
            if (i > 0 && !controls.includes(arr[i - 1])) {
                res.push(arr[i - 1]);
            }
        }
    }

    return res;
}

module.exports = {
    transform
};