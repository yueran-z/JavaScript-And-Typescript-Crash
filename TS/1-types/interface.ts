// TS 的核心原则就是型别检查，而介面 (Interface) 正是在 TS 中用来定义抽象物件的资料型别。介面的概念可以想像成是订定契约，而使用此契约的物件或类别就一定会符合契约中所规定的规范，如果不符合，TS 就会报错，但是介面只会定义描述有哪些方法 (Method) 和属性 (Property)，无法实作
interface Person {
    name?: string
    readonly birthday: Date
    habits: string[]
    run(meter: number): void
    [x: string]: any // 我们希望在初始化后仍然能够增加任意属性
    // 注：一旦定义任意属性，确定属性和可选属性都必须是它的子属性
}

// 介面 (Interface) vs 型别别名 (Type Alias)
//使用 interface 表示物件
interface Point {
    x: number;
    y: number;
}
//使用 type 表示物件
type Point1 = {
    x: number;
    y: number;
};

//使用 interface 表示函式
interface SetPoint {
    (x: number, y: number): void;
}
//使用 type 表示函式
type SetPoint1 = (x: number, y: number) => void;

// 1. Interface 只能表示物件格式，无法表现原始型别、列举、元组和复合型别；Type 可以表现任何型别
// 加上参考 Maxwell Alexius 大神的文章，介面表示物件格式 (包含一般物件、函式、阵列、类别与类别建构的物件)，但无法描述原始型別(Primitive)、列舉(Enum)、元組(Tuple)和複合型別，而 type 可以表示任何型别。

// 2. 扩展的作法有两种：一种是extends，只有 Interface 可以使用；
// 另一种作法是 union 或 intersection ， Type 和 Interface 都可以使用。

// type C = T1 & T2
// interface I2 extends T, I1 { }

//3.和 Interface 和 Type 的扩展可以混

// Interface 和 Type 使用情境比较如下：
// Interface 扩展 Interface

interface A { x: number; }
interface B extends A { y: number; }
// Type 扩展 Type

type A1 = { x: number; };
type B1 = A1 & { y: number; };
// Interface 扩展 Type

type A2 = { x: number; };
interface B2 extends A2 { y: number; }
// Type 扩展 Interface

interface A3 { x: number; }
type B3 = A3 & { y: number; };

// Interface 和 Type 使用情境比较如下：
// 单纯想表示静态格式资料概念时使用 type，希望资料被重复多方利用时使用 interface
// 若是原始资料型别、列举(Enum) 和元组(Tuple) 型别和复合型别，通常只能使用 type 进行宣告
// 若是物件格式 Interface 和 Type 都可以进行宣告，但建议使用 Interface 比较弹性
// Interface 和 Type 可以混用扩展，但使用 extends 和 union 或 intersection 扩展代表的含义不同：
// 不希望再被扩充或静态的型别格式就应该用 type 宣告 type，藉由 union 或 intersection 达成扩展
// 希望之后被扩充或多方利用，则应该宣告成 interface，藉由 extends 去达成扩展
