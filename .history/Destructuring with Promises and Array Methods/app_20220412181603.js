/*
Destructuring allows us to see inside an object
or array when it is being passed to a function.
This can be combined with calls to Array methods
and Promise.then methods to great effect.
*/
const log = console.log;
let people = [{
        id: 1,
        name: 'Leonard',
        phd: true,
        partner: 'Penny'
    },
    {
        id: 2,
        name: 'Howard',
        phd: false,
        partner: 'Bernadette'
    },
    {
        id: 3,
        name: 'Sheldon',
        phd: true,
        partner: 'Amy'
    },
    {
        id: 4,
        name: 'Raj',
        phd: true,
        partner: 'Cinnamon'
    },
];
let nums = [12, 34, 56, 78, 90];

let n = nums.map((number) => {
    log(number);
});
let ppl = people.map(({
    name: nm,
    partner: pt
}) => {
    log(nm, '&', pt);
});

// fetch('./people.json')
//     .then((resp) => {
//         if (!resp.ok) throw new Error(resp.statusText);
//         return resp.json();
//     })
//     .then(([first, second, ...rest]) => {
//         //...rest MUST be the last argument for desctructuring
//         // rest[rest.length-1] would be the last element.
//         log(first);
//         log(second);
//     })
//     .catch(log);

//?? Dynamic Object Properties in JavaScript
let beverage = 'Beer';

const myObj = {
    a: 1,
    b: 2,
    c: 3,
    food: 'cheese',
    propName: 'cheese',
    beverage: 'Heineken', // beverage: 'Heineken'
    [beverage]: 'corona', // Beer: 'corona'
};

let addProp = (obj, propName, propValue) => {
    // obj.food = 'cheese';
    obj[propName] = propValue;
    obj.propName = propValue;
    console.log(first)
};
addProp(myObj, 'food', 'cheese');