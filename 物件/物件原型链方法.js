// 判断某个属性是不是在物件上面
var obj100 ={
    construtor: {},
    name: 'something',
    age: 42
}
console.log(Object.hasOwnProperty(obj100.name))


// 检查物件的原型
console.log(Object.isPrototypeOf(obj))
// 检查属性是否可以被列举
console.log(Object.valueOf(obj100.name))
