const { NotImplementedError } = require('../lib');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
    const atIndex = email.lastIndexOf('@');

    if (atIndex !== -1) {
        return email.substring(atIndex + 1);
    }

    return email;
}

module.exports = {
    getEmailDomain
};