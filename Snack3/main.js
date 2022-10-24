/* Scrivi una funzione che accetti una stringa come argomento e la ritorni
girata (es. Ciao -> oaiC) */


const word = "Parola";

const reversed = reverseWord(word);
console.log(reversed);






/**
 * Reverse a given string
 * @param {string} word string to be reversed
 * @returns {string} reversed string
 */
function reverseWord(word) {
    const wordArray = word.split("")
    const revArray = wordArray.reverse();
    const revWord = revArray.join("");
    return revWord
};