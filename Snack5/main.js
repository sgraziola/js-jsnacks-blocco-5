/* Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione
compresa tra “a” e “b” */

const min = 3;
const max = 6;

const word = ["p","a","r","a","c","e","t","a","m","o","l","o"];

const slicedWord = sliceArray(word,min,max);

console.log(slicedWord);


/* 
function sliceArray(a,b, arr) {
    const slicedArray = arr.slice(a,b);
    return slicedArray
    
} */

function sliceArray(arr, start, end) {
    const slicedArray = [];
 
    for(let i = start; i<end; i++) {
      slicedArray.push(arr[i]);
    }
    
    return slicedArray;
}