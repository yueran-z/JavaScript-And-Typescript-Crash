/**********************************
Object.keys(obj)
Object.values(obj)
Object.entries(obj)
Create an iterable object from the Object
**********************************/

let westeros = {
    cersei: 'Lannister',
    arya: 'Stark',
    jon: 'Snow',
    brienne: 'Tarth',
    daenerys: 'Targaryen',
    theon: 'Greyjoy',
    jorah: 'Mormont',
    margaery: 'Tyrell',
    sandor: 'Clegane',
    samwell: 'Tarly',
    ramsay: 'Bolton'
}

//for(let prop of arr)
// foreach( )  filter( ) map() reduce()

let keys = Object.keys(westeros);
console.log('Keys ', keys);
let vals = Object.values(westeros);
//console.log('Vals', vals);
let entries = Object.entries(westeros);
console.log('Entries', entries);
console.log(entries[2][1]);