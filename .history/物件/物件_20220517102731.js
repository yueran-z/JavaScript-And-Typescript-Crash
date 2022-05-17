// target, ...复制对象
var obj = {a:1};
var copy = Object.assign({}, obj)
console.log(copy)

var obj2 = {a:1, b:['a', 'b']}
var copy2 = Object.assign({}, obj2)
console.log(copy2)
copy.b.push(['d'])
console.log(copy2.b)
console.log(obj2.b)

// 原型链指向谁，
var obj3 = {};
var a = Object.create(String.prototype);
// /可以改变他的原型链吗
Object.setPrototypeOf(obj3, String.prototype);
Object.getPrototypeOf(obj3)

// 对物件的属性做 
// obj要设定的物件
// 