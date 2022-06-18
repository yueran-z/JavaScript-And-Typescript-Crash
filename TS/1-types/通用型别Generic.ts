// 通用型别（Generics Types）是指在定义宣告时不预先指定具体的型别，而是执行的时候才确认型别的特殊方式，
// 经常用在函式、介面或类别等型别。

// 使用 any 型别就可以让函式接收任何型别的参数，但却无法达到传入型别与回传型别一致的目标，因为，回传值也可以是任何型别。
// 这时候，我们需要一种新的方法来做到这件事，这就是通用型別(Generic Types)出现的原因！

// 函式使用通用型别
function foo<T>(arg: T[]):T[]{
    return arg
}

function exchange<T, U, V>(tuple: [T, U, V]): [U, T, V]{
    return [tuple[1], tuple[0], tuple[2]]
}

exchange([18, 'hello', true]); // ['hello', 18, true]
//若型别重复也没关系
exchange([18, 'hello', 'world']) //['hello', 18, 'world']



//通用介面:带有通用型别的介面就称为通用介面
// 究竟什么是介面 (Interface) 呢？介面可以想像成是转接头，在不同国家旅行的时候，要使用符合插孔形状的转接头才可以使用，介面 (Interface) 就是用来定义需要符合的形状 (型别格式)
// 通用型别限缩
interface foodie {
    length: number
}

interface foodie {
    length: number;
}

function food<T extends foodie>(arg: T):T{
    console.log(arg.length);
    return arg;
}

function getProperty<T, K extends keyof T>(obj: T, key: K){
    return obj[key];
}

let x = {a: 1, b: 2, c: 3, d: 4}

// 通用型别使用在类上
class Log <T>{
    run(value: T){
        console.log(value);
        return value;
    }
}

let log1 = new Log();//可以不限缩型别
log1.run(1);
let log2 = new Log<string>(); //也可以限缩型别
log2.run("2"); //2



