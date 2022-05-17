// target, ...复制对象
var obj = {a:1};
var copy = Object.assign({}, obj)
console.log(copy)

var obj2 = {a:1, b:['a', 'b']}
var copy2 = Object.assign({}, obj2)
console.log(copy2)
copy2.b.push(['d'])
console.log(copy2.b)
console.log(obj2.b)

// 原型链指向谁，
var obj3 = {};
var a = Object.create(String.prototype);
// /可以改变他的原型链吗
Object.setPrototypeOf(obj3, String.prototype);
Object.getPrototypeOf(obj3)

// 对物件的细节属性做设定
// obj要设定的物件
// 

// 不想让物件的属性被修改
var obj2 = {county: "China", city: "GuangZhou"};
Object.seal()
Object.freeze(obj2);

Object.preventExtensions() 

// 把物件转换成可列举的型别
// 给物件带上key,val,可以用forof回圈跑出所有的值
const object = {
    name: 'something',
    age:42
};
for (let [key,val] of Object.entries(object)) {
    console.log(`${key}: ${val}`);
}
