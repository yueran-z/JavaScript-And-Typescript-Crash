let obj = {
    id: 1,
    name: 'Leonard',
    active: true,
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
str = JSON.stringify