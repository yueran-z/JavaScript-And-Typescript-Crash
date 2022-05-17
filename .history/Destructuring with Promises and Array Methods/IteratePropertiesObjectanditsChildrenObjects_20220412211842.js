// Iterate over the Properties of an Object and its Children Objects
let people = {
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
                street: "100 N. Main",
                city: "Lehi",
                num: 2
            }
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