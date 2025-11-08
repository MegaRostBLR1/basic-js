const { NotImplementedError } = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 */
function getSeason(date) {
    if (arguments.length === 0) {
        return 'Unable to determine the time of year!';
    }

    if (
            Object.prototype.toString.call(date) !== '[object Date]' ||
            isNaN(date.getTime())
    ) {
        throw new Error('Unable to determine the time of year!');
    }

    const month = date.getMonth();

    if (month === 11 || month === 0 || month === 1) {
        return 'winter';
    } else if (month >= 2 && month <= 4) {
        return 'spring';
    } else if (month >= 5 && month <= 7) {
        return 'summer';
    } else {
        return 'autumn';
    }
}

module.exports = {
    getSeason
};