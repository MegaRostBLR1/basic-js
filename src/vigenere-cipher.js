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
    constructor(type = true) {
        this.isDirect = type;
    }

    _process(message, key, mode) {
        if (message === undefined || key === undefined) {
            throw new Error('Incorrect arguments!');
        }

        message = String(message);
        key = String(key).toUpperCase();

        let result = '';
        let keyIndex = 0;

        for (let i = 0; i < message.length; i++) {
            const char = message[i].toUpperCase();
            const code = char.charCodeAt(0);

            if (code >= 65 && code <= 90) {
                const keyChar = key[keyIndex % key.length];
                const keyCode = keyChar.charCodeAt(0) - 65;
                let newCode;

                if (mode === 'encrypt') {
                    newCode = ((code - 65 + keyCode) % 26) + 65;
                } else {
                    newCode = ((code - 65 - keyCode + 26) % 26) + 65;
                }

                result += String.fromCharCode(newCode);
                keyIndex++;
            } else {
                result += char;
            }
        }

        if (!this.isDirect) {
            result = result.split('').reverse().join('');
        }

        return result;
    }

    encrypt(message, key) {
        return this._process(message, key, 'encrypt');
    }

    decrypt(encryptedMessage, key) {
        return this._process(encryptedMessage, key, 'decrypt');
    }
}

module.exports = {
    directMachine: new VigenereCipheringMachine(),
    reverseMachine: new VigenereCipheringMachine(false),
    VigenereCipheringMachine,
};