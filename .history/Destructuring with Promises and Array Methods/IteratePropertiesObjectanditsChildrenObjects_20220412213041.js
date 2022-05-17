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
// -------- 套一层函式外衣---------------------------
for (let val in obj) {
    if (isObject(obj[val])) {//----套一层条件外衣,这里的子问题是----
        for (let val2 in obj[val]) {
            console.log(obj[val][val2]);
            objProps(obj[val])
        }
    } else {
        console.log(val, obj[val]);
    }
}
// -------------------------
}
objProps(person);
