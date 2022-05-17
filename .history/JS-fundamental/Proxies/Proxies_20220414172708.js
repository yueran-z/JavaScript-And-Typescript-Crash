// 代理对象用于在访问目标对象的属性时定义自定义行为
// Syntax: var p = new Proxy(target, handler);
// target是你传进去的对象，handler是当你尝试访问对象中关于该key的那个时候发生的其他事情

// Example 1
var handler = {
    get(target, key) {
        return key in target ? target[key] : 37;
    }
};

var p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b);
console.log('c' in p, p.c);

// 代理函数可以用来帮助验证你传递给对象的数据
// Example 2
let validator = {
    set: function (obj, prop, value) {
        if (prop === 'age') {
            if (typeof value !== 'number' || Number.isNaN(value)) {
                console.log('Age must be a number')
            }
            if (value < 0) {
                console.log('Age must be a positive number')
            }
        }

        obj[prop] = value;

        return true;
    }
};

let person = new Proxy({}, validator);
person.age = 'young';
console.log(person.age)
person.age = -30;
person.age = 100;
console.log(person.age)