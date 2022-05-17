// - const vs let
//?? const does't mean immutable, const means can't reassign 

// - primitives vs objects
//?? primitives are immutable in JS,array and objects are mutable 
const obj = {
    "id": 1,
    "name": "Leonard",
    "phd": true,
    "partner": "Penny"
}
const arr=[1,3,4,5,6,7]

// - Object freezing and sealing
Object.freeze(arr); //??make object to immutable
arr[0]=0
console.log(arr[0]);

// shallow vs deep copy
let arr2 = Array.from(arr)//copy from this arr 
let arr3=arr //create the new [pointer] to the same location in memorary
// - Object chaining
// - Proxies
// - new upcoming JavaScript DataTypes