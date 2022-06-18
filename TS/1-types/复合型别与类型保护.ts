// 复合型别又可以分为聯合型別(Union Type) 和交集型別(Intersection Type)，这类型的型别由逻辑运算子组成，分别是 | 与 &

let signee: string | number
signee = 0

function getString(something: string | number): string {
    return something.toString();
}



// JS 运算子：
// typeof 用来检测未经计算的资料型别
function getProp(prop: string | number) {
    if (typeof prop === 'string') {
        console.log(prop.length);
    }
    console.log(prop);
}


// instanceof 用来检测建构函式 A 的 prototype 是否出现在某个 instance 物件 B 的原型链上，简单来说，就是用来判断 A 是否为 B 的实例。表达式为 A instanceof B
class Song {
    constructor(public title: string, public duration: number) {

    }
}
class Playlist {
    constructor(public name: string, public songs: Song[]) {

    }
}
function getItemName(item: Song | Playlist) {
    if (item instanceof Song) {
        return item.title;
    }
    return item.name
}
getItemName(new Song('告白气球', 300))




// 参数 is 型别：定义自定义型别----------------------------------------
// n in x:n 为字串或字串字面值，x 为 union 型别
// in 关键字会回传布林值，判断属性是否存在特定物件或其原型链上
function isSong(item: any): item is Song {
    return 'title' in item
}

//---------------------------------------------------------------------
type Info1 = {
    name: string,
    age: number
}

type Info2 = {
    isGirl: boolean
    nickname: string
}

type UnionInfo = Info1 | Info2 //变数里的值只要完全满足info1 | Info2其中一个即可

let person3: UnionInfo = {//含全部Info2，不含Info1 => PASS!
    isGirl: true,
    nickname: 'Nana'
}

// 1.含部分Info1，含部分Info2 => Error
// let person1: UnionInfo = {
//     name: 'Una',
//     isGirl: true
// }



//---------------------------------------------------------------------
type Person = {
    name: string;
}

type Contact = {
    phone: string;
}

function showPersonContact(personContact: Person & Contact): void {
    console.log(personContact)
}

// 含全部Info2和全部Info1才passed:  Person & Contact
let personContact: Person & Contact = { name: "Dane", phone: "111-111-111" };

showPersonContact(personContact)

// 复合型别中的联合型别 (Union) 和交集型别 (Intersection)，两者的概念想成 JS 中的逻辑运算子 |(OR) 和&(AND)



