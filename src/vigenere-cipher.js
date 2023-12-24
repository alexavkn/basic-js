const { NotImplementedError } = require('../extensions/index.js');

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

  constructor(direct) {
    this.direct = direct;
  }

  encrypt(message, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!message || !key) {
      throw new Error ('Incorrect arguments!');  
    }

    let arr_alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let arr_message = message.split("");
    let arr_key = key.split("");
    
    let number_in_message = 0;
    let number_in_key = 0;
    let new_position = 0;
    let new_message = "";
    let counter = 0;

    while (arr_key.length < arr_message.length) {
      arr_key = arr_key.concat(arr_key);  
    } 

    for (let i = 0; i < arr_message.length; i++) {
      if (arr_message[i + counter] === undefined) {
        break;
      }
      number_in_message = arr_alphabet.indexOf(arr_message[i + counter].toUpperCase());
      while (number_in_message < 0) {
        new_message = new_message + arr_message[i + counter];
        counter++;
        if (!(arr_message[i + counter] === undefined)) {
          number_in_message = arr_alphabet.indexOf(arr_message[i + counter].toUpperCase());
        }
        else {
          break;  
        }
      }
      if (arr_message[i + counter] === undefined) {
        break;
      }
      number_in_key = arr_alphabet.indexOf(arr_key[i].toUpperCase());
      new_position = number_in_message + number_in_key;
      if (new_position < 26) {
        new_message = new_message + arr_alphabet[new_position];
      }
      else
      {
        new_message = new_message + arr_alphabet[new_position - 26];    
      }    
    }
    if (this.direct === undefined) {
      return new_message;
    }
    else
    {
      return new_message.split("").reverse().join("");;
    }
  }

  decrypt(encryptedMessage, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!encryptedMessage || !key) {
      throw new Error ('Incorrect arguments!');  
    }

    let arr_alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let arr_message = encryptedMessage.split("");
    let arr_key = key.split("");
    
    let number_in_message = 0;
    let number_in_key = 0;
    let new_position = 0;
    let new_message = "";
    let counter = 0;

    while (arr_key.length < arr_message.length) {
      arr_key = arr_key.concat(arr_key);  
    } 

    for (let i = 0; i < arr_message.length; i++) {
      if (arr_message[i + counter] === undefined) {
        break;
      }
      number_in_message = arr_alphabet.indexOf(arr_message[i + counter].toUpperCase());
      while (number_in_message < 0) {
        new_message = new_message + arr_message[i + counter];
        counter++;
        if (!(arr_message[i + counter] === undefined)) {
          number_in_message = arr_alphabet.indexOf(arr_message[i + counter].toUpperCase());
        }
        else {
          break;  
        }
      }
      if (arr_message[i + counter] === undefined) {
        break;
      }
      number_in_key = arr_alphabet.indexOf(arr_key[i].toUpperCase());
      new_position = number_in_message - number_in_key;
      if (new_position < 0) {
        new_message = new_message + arr_alphabet[26 - Math.abs(new_position)];
      }
      else
      {
        new_message = new_message + arr_alphabet[new_position];    
      }    
    }
    if (this.direct === undefined) {
      return new_message;
    }
    else
    {
      return new_message.split("").reverse().join("");;
    }
  }
}

const directMachine = new VigenereCipheringMachine();

// reverseMachine.encrypt('attack at dawn!', 'alphonse');
// new_message = reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse');
// console.log(new_message);
new_message = directMachine.encrypt('Same length key', 'Samelengthkey');
console.log(new_message);

module.exports = {
  VigenereCipheringMachine
};
