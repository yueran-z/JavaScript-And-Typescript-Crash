//  Objects：是一种具有属性和方法的数据类型，属性可以用.或[]访问

var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.color;
console.log(myCar.make);
console.log(myCar.color);

myCar["year"] = 1969;
console.log(myCar["model"])

myCar["Do I like?"] = "I hate my car.";
console.log(myCar["Do I like?"]);

// 可以用for in loop去遍历每一个属性
function showProps(obj, objName) {
    var result = "";
    for (var i in obj) {
        // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain 检查对象中是否有XXX属性
        if (obj.hasOwnProperty(i)) {
            result += objName + "." + i + " = " + obj[i] + "\n";
        }
    }
    return result;
}
console.log(showProps(myCar, "myCar"));

// 创建对象的3种方法：
// 1.对象初始化
// Creation: object initializer
var myHonda = {
    color: "red",
    wheels: 4,
    engine: {
        cylinders: 4,
        size: 2.2
    }
};

// 2.用构造函数定义类型，用new创建实例
// Creation: constructor function
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

var mycar = new Car("Chevy", "Malibu", 1993);
var anothercar = new Car("Mazda", "Miata", 1990);
console.log(mycar.model);
mycar.color = "black";
console.log(mycar.color);

// 用yuanx
// Creation: Object.create
var Animal = {
    type: "Invertebrates",
    displayType: function () {
        console.log(this.type);
    }
}

var animal1 = Object.create(Animal);
animal1.displayType();

var fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType();