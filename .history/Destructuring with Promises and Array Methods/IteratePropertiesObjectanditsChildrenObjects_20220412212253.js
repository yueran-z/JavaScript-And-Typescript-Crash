// Iterate over the Properties of an Object and its Children Objects
let p = {
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
for (let val in person) {
    if(isObject(person[val])){
for(let val2 in person[val]){
    console.log(val2, person[val][val2]);
}
    }else{
    console.log(val, person[val]);
    }
}