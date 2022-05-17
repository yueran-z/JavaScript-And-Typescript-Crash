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

// 取得物件属性的名称：Object.keys() / forin 回圈：针对原型链的话会被显示出来
// 只会取出物件本身不涉及原型链的值，一样也是 
const obj4 = {name: "John", age: 28, job: "teacher"};
console.log(Object.getOwnPropertyNames(obj4));

// 不想让物件的属性被修改
// 只针对物件本身属性浅层
// freeze（）只读，其他什么都不可以
var obj2 = {county: "China", city: "GuangZhou"};

Object.freeze(obj2);
// obj2.county.push("America");
// console.log(obj2)
// delete obj2.county; //false

var deepl = {"count":12, price: [5, 10]}
Object.freeze(deepl);
deepl.price.push(25)
console.log(deepl.price)


// Object.seal()除了不可以新增，其他都可以                   没有办法新增属性，但可以修改，删除属性

Object.preventExtensions()


// seal与前面两个相反，可读可改，但不可以新增，删除
var obj2 = {
    county: "China",
    city: "GuangZhou"
};

Object.seal()



// 把物件转换成可列举的型别
// 给物件带上key,val,可以用forof回圈跑出所有的值
const object = {
    name: 'something',
    age:42
};
for (let [key,val] of Object.entries(object)) {
    console.log(`${key}: ${val}`);
}
