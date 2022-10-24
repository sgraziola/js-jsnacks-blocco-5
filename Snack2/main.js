/* Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine. */

const zucchini = [
    {
        type: "black beauty",
        weight: 170,
        lenght: 20
    },

    {
        type: "green machine",
        weight: 155,
        lenght: 19
    },

    {
        type: "dunja",
        weight: 110,
        lenght: 15
    },

    {
        type: "spineless perfection",
        weight: 160,
        lenght: 19
    },

    {
        type: "spineless beauty",
        weight: 145,
        lenght: 17
    },

    {
        type: "easy picky gold II",
        weight: 140,
        lenght: 16
    },

    {
        type: "round",
        weight: 75,
        lenght: 10
    },

    {
        type: "eight ball",
        weight: 65,
        lenght: 8
    },

    {
        type: "Sungreen",
        weight: 230,
        lenght: 22
    },

    {
        type: "black forest",
        weight: 190,
        lenght: 21
    }
]

const over15 = [];
const under15 = [];
let totalWeightO15 = 0;
let totalWeightU15 = 0;
//divido l'array in due array in base alle lunghezze
zucchini.forEach(zuchini => {
    if(zuchini.lenght > 15){
        over15.push(zuchini);
    } else {
        under15.push(zuchini);
    };
});
//calcolo peso delle zucchine sopra i 15 cm
//console.log(over15);
over15.forEach(zuchini =>{
    
    //console.log(zuchini.weight);
    totalWeightO15 += zuchini.weight; 
});
console.log("Il peso totale delle zucchine di lunghezza over 15 cm è " + totalWeightO15 + " Grammi" );

//console.log(under15);
under15.forEach(zuchini =>{
    
    //console.log(zuchini.weight);
    totalWeightU15 += zuchini.weight; 
});
console.log("Il peso totale delle zucchine di lunghezza under 15 cm è " + totalWeightU15 + " Grammi" );
