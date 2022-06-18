// 型別別名 (Type Alias)
// 顾名思义就是用来重新命名一个型别，型别可以使任何型别，使用关键字type进行宣告，给联合型别取一个新名字叫Direction
// 型别别名主要用来`简化程式码`以及`让型别含义变得清楚`。上面的程式码将字串字面值联合型别抽象化为 Direaction 型别
type alignment = "left" | "right" | "center" 

function layout(s: string, alignment){
    console.log(`${s} placed at the ${alignment}`)
}

function compare(a:string, b:string): -1 | 0 | 1 {
    return a === b ? 0: a > b ? 1 : -1;
}

// 字面值型別（Literal Types)： 值当做 "型别"来用
// 數字字面值(Numeric Literal)、
// 列舉字面值(Enum literal types) --不变的key值
// 和布林值字面值(Boolean literal types)


// 列舉字面值 (Enum Literal Types)
function getPort(scheme: "http"): 80;
function getPort(scheme: "https"): 443;
function getPort(scheme: "http" | "https"): 80 | 443 {
    switch(scheme){
        case "http": return 80;
        case "https": return 443;
    }
}
const httpPort = getPort("http"); //  80
const httpsPort = getPort("https"); // 443

// 布林字面值 (Boolean Literal Types)
const TRUE : true = true;
const FALSE : false = false;




