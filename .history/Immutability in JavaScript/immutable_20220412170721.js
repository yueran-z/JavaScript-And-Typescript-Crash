// - const vs let
// const does't mean immutable, const means can't reassign 

// - primitives vs objects
// primitives are immutable in JS,array and objects are mutable 
const obj = {
    "id": 1,
    "name": "Leonard",
    "phd": true,
    "partner": "Penny"
}
const arr=[1,3,4,5,6,7]

// - Object freezing and sealing
Object.freeze(arr);
// - Object chaining
// - Proxies
// - new upcoming JavaScript DataTypes