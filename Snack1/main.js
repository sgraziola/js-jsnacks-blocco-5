/* Crea un array di 10 oggetti che rappresentano una zucchina, indicando
per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */

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

let totalWeight = 0;
zucchini.forEach(zuchini => {
    //console.log(zuchini.weight);
    totalWeight += zuchini.weight;
    //console.log(totalWeight);
});

console.log(totalWeight + " Grammi");