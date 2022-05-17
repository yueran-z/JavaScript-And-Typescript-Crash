// Reflect Object - built-in object that provides methods for interceptable JavaScript operations
// All methods are static
// has no constructor cannot use `new`
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect
const log = console.log;

let alex = {
    name: 'Alex',
    id: 93,
    hello: function (a, b) {
        console.log(`Hello my name is ${this.name}. ${a} ${b}`);
    },
};

log(Reflect.ownKeys(alex));
log(Reflect.get(alex, 'id'));
log(Reflect.set(alex, 'id', 94));
log(Reflect.get(alex, 'id'));
log(Reflect.has(alex, 'name'));
Reflect.apply(alex.hello, alex, Reflect.ownKeys(alex));
Reflect.defineProperty(alex, 'age', {
    value: 30,
    enumerable: false
});
log(Reflect.get(alex, 'age'));

/**
Reflect.apply(targetFunc, thisArg, argList); //for functions
Reflect.get(target, key, handler); //handler is Proxy. get the value of a property
Reflect.set(target, key, value, handler); //handler is Proxy. set the value of a property
Reflect.has(target, key); // check if it has a property
Reflect.delete(target, key); //like the delete operator
Reflect.ownKeys(target); // enumerate through the properties
Reflect.defineProperty(target, key, {propertyDescriptor}); //like Object.defineProperty
 */