/* Scrivi una funzione che fonda due array (aventi lo stesso numero di
elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]. */

const letters = ["a","b","c"];
const numbers = [1,2,3];



const mergeLetNums = mergeArrays(letters,numbers);

console.log(mergeLetNums);




/**
 * Merges elements of two different arrays alternatively
 * @param {string} arr1 first array to merge
 * @param {string} arr2 second array to merge
 * @returns {string} merged array
 */
function mergeArrays(arr1, arr2) {
    const merged = [];   
    for (i = 0; i < arr1.length; i++) {
        merged.push(arr1[i], arr2[i]);
    }
    return merged
}
