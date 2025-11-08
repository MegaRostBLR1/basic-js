const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
    constructor(direct = true) {
        this.direct = direct;
        this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    encrypt(message, key) {
        if (!message || !key) {
            throw new Error('Incorrect arguments!');
        }

        return this.processText(message, key, 'encrypt');
    }

    decrypt(encryptedMessage, key) {
        if (!encryptedMessage || !key) {
            throw new Error('Incorrect arguments!');
        }

        return this.processText(encryptedMessage, key, 'decrypt');
    }

    processText(text, key, mode) {
        const upperText = text.toUpperCase();
        const upperKey = key.toUpperCase();
        let result = '';
        let keyIndex = 0;

        for (let i = 0; i < upperText.length; i++) {
            const currentChar = upperText[i];

            if (this.alphabet.includes(currentChar)) {
                const textIndex = this.alphabet.indexOf(currentChar);
                const keyChar = upperKey[keyIndex % upperKey.length];
                const keyIndexInAlphabet = this.alphabet.indexOf(keyChar);

                let newIndex;
                if (mode === 'encrypt') {
                    newIndex = (textIndex + keyIndexInAlphabet) % this.alphabet.length;
                } else {
                    newIndex = (textIndex - keyIndexInAlphabet + this.alphabet.length) % this.alphabet.length;
                }

                result += this.alphabet[newIndex];
                keyIndex++;
            } else {
                result += currentChar;
            }
        }

        return this.direct ? result : result.split('').reverse().join('');
    }
}

module.exports = {
    directMachine: new VigenereCipheringMachine(),
    reverseMachine: new VigenereCipheringMachine(false),
    VigenereCipheringMachine,
};