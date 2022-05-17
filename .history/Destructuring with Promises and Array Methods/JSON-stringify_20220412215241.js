let obj = {
    id: 1,
    name: 'Leonard',
    active: true,
    age: 50,
    partner: 'Penny',
    email: 'penny@gmail.com',
    type: {
        type1: "admin",
        type2: "user"
    },
    address: {
        street: {
            street1: "100 N. Main",
            street2: "102 N. Main",

        },
        city: "Lehi",
        num: 2
    }
}
let str;
str = JSON.stringify(obj);
console.log('1', str)

str = JSON.stringify(obj, ['age', 'active', 'name']);
console.log('\n2',str)

function replace(key,val){
    if(typeof val == 'string'){
        return 'STRING'
    }else{
        return val
    }
}
str= JSON.stringify(obj)