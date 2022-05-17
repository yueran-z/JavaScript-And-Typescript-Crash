// Iterate over the Properties of an Object and its Children Objects
let person = {
            id: 1,
            name: 'Leonard',
            active: true,
            partner: 'Penny',
            email: 'penny@gmail.com',
            type: {
                type1: "admin",
                type2: "user"
            },
            address:{
                street: {
                    street1: "100 N. Main",
                    street2: "102 N. Main",

                },
                city: "Lehi",
                num: 2
            }
        }
const isObject = function (val) {
if (val === null) { return false; }
return (typeof val === "object")
}
const objProps = function (obj){
// -----------------------------------
for (let val in person) {
    if (isObject(person[val])) {
        for (let val2 in person[val]) {
            console.log(person[val][val2]);
        }
    } else {
        console.log(val, person[val]);
    }
}

}
