const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    chain: [],

    getLength() {
        return this.chain.length;
    },

    addLink(value) {
        let linkValue;
        if (value === null) {
            linkValue = 'null';
        } else if (value === undefined) {
            linkValue = 'undefined';
        } else {
            linkValue = String(value);
        }

        this.chain.push(linkValue);
        return this
    },

    removeLink(position) {
        if (typeof position !== 'number' ||
                !Number.isInteger(position) ||
                position < 1 ||
                position > this.chain.length) {
            this.chain = [];
            throw new Error("You can't remove incorrect link!");
        }

        this.chain.splice(position - 1, 1);
        return this;
    },

    reverseChain() {
        this.chain.reverse();
        return this;
    },

    finishChain() {
        const result = this.chain.map(link => `( ${link} )`).join('~~');
        this.chain = [];
        return result;
    }
};

module.exports = {
    chainMaker,
};