// Class 可以产生更类似传统物件导向的方式来撰写继承
// 简单来说，Class就是一个可以产生物件的特殊函式，可以想象成设计图，能透过它产生新的物件

class Car {
    description: string;
    color: string;

    constructor(color: string) {
        this.color = color;
        this.description = "我是車子"
    }

    getDescription(): string {
        return `${this.description} - ${this.color}`
    }
}

// 使用 new 关键字创建车子物件，并执行建构函式进行初始化，这时候，车子就会拥有设计图的所有属性和功能
const blackCar = new Car("黑色");
const redCar = new Car("紅色");
console.log(blackCar.getDescription()); // 我是車子 - 黑色

// Class 和 Interface 一样都可以使用 extends 关键字进行扩展 / 继承
// 假设现在车子要开发第二代，希望提供消费者不同空间大小车型的选择，但仍维持第一代的功能，这时候就可以这样做：
class Car2 extends Car {
    getDescription(): string {
        return `${super.getDescription()} - 第二代強化版`
    }
}

const greenCar = new Car2("绿色")
console.log(greenCar.getDescription()) //我是車子 - 綠色 第二代強化版

// 透过 extends 关键字，新类别 CarV2 指定了原型为 Car，
// 这时候 CarV2 会指向 Car，因而可以取用 Car 的属性和方法

// 值得注意的是，CarV2 从他老爸 Car 继承所有的方法和属性，且在类别内只要透过 super 就能穿越父子间的羁绊，直接请老爸帮忙执行事情，就像上方的 super.getDescription ，就是直接请老爸执行他的 getDescription。

// 另外，在 CarV2 没有建构函式，为什么呢？上面有提到建构函式不一定需要，预设会是空函式（即 function () { }），通常只有需要进行初始化成员变数才需要建构函式。
class Car3 {
    description: string;
    color: string;

    constructor(color: string) {
        this.color = color;
        this.description = "我是車子"
    }

    getDescription(): string {
        return `${this.description} - ${this.color}`
    }
}
class CarV2 extends Car3 {
    constructor(color: string, version: number) {
        // 在這裡執行的 super 等同於父類別的 constructor
        super(color);
        this.version = version;
    }
    version: number;
    getDescription(): string {
        return `${super.getDescription()} ${this.version} 第二代強化版`;
    }
}

const greenCar2 = new CarV2('綠色', 23);
console.log(greenCar2.getDescription())//我是車子 - 綠色 23 第二代強化版



//介面 (Interface) 主要表示抽象的行为
// 举个例子来说，门是一个类别，防盗门是门的子类别，倘若防盗门有警报器的功能，现在如果有另外一个类别车子也有警报器的功能，这时候，就可以考虑把警报器功能提取出来成一个介面，让防盗门和车子去实践(implement)。
interface Alarm {
    alert(): void;
}

class Door {
}

class SecurityDoor extends Door implements Alarm {
    alert() {
        console.log('SecurityDoor alert');
    }
}


class Car4 implements Alarm {
    alert() {
        console.log('Car alert');
    }
}
// 創建利用Car類別作為原型的新物件
const car4: Car4 = new Car4();
car4.alert();

// 一个类别可以实践多个介面：所有介面所定义的属性和方法都必须实践，倘若少了 alert 、lightOn 或 lightOff 任一函式就会报错。
interface Alarm {
    alert(): void;
}

interface Light {
    lightOn(): void;
    lightOff(): void;
}

class Car6 implements Alarm, Light {
    alert() {
        console.log('Car alert');
    }
    lightOn() {
        console.log('Car light on');
    }
    lightOff() {
        console.log('Car light off');
    }
}

// 来个重点整理吧：类别和介面的继承及实践

// 类别会使用 extends 来建立子类别，类别会使用 implements 来实践一个或多个介面
// 子类别继承父类别后，可以使用父类别的属性和方法(private 除外)，也可以覆写父类别的方法
// 一个类别只能继承一个，若要实现一个类别继承多个类别需要使用 Mixins
// 一个介面可以继承多个介面，直接使用 extend 关键字，每个介面用逗号隔开即可
// 一个类别可以实践多个介面，直接使用 implement 关键字，每个介面用逗号隔开即可，类别中必须包含所有介面定义的属性和方法
// 多个类别可以实践同一个介面，一个类别可以实践多个的介面