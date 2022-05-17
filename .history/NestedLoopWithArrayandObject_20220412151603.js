// nested loops and multi-dimensional objects
// We can use nested loops to access all the elements
// inside multi-dimensional arrays or objects

let twoD = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 10, 5, 7, 3, 22, 6, 42],
    [123, 54, 12, 11, 9, 15]
];

let bigHero = {
    characters: [{
            name: 'Hiro',
            voice: 'Ryan Potter'
        },
        {
            name: 'Baymax',
            voice: 'Scott Adsit',
            prop: 12
        },
        {
            name: 'Go Go Tamago',
            voice: 'Jamie Chung'
        },
        {
            name: 'Fred',
            voice: 'T.J. Miller'
        }
    ]
};

// let chars = bigHero['characters']; //bigHero.characters
// for (let i = 0, len = chars.length; i < len; i++) {
//     //    console.log(chars[i]);
//     //    console.log(chars[i].name);
//     //    console.log(chars[i]['voice']);
//     for (let prop in chars[i]) {
//         console.log(prop, chars[i].prop, chars[i][prop]);
//     }
// }

// nested for loops
let rows = twoD.length;
for(let i=0; i<rows; i++){
   let items = twoD[i].length;
   console.log(i, items)
   
   for(let n=0; n<items; n++){
       console.log( twoD[i][n] );
   }
}