// Symbols 是es6中的一种新数据类型，是一种唯一且不可变的数据类型，他们可以用作唯一ID的标记
let symbol1 = Symbol('symbol2');
let symbol2 = Symbol('symbol2');
console.log(symbol1 === symbol2);
console.log(typeof symbol1);
// 尝试添加带有符号的字符串，则会引发类型错误，你必须将其显式转换为字符串
// console.log('symbol: ' + symbol1）// type error
console.log('symbol: ' + symbol1.toString());

// 两个用例：1.主要用作唯一的属性键，因为该符号永远不会与任何其他属性发生冲突
// Use case 1: Symbols as property keys
const MY_KEY = Symbol();
let obj = {};

obj[MY_KEY] = 123;
console.log(obj[MY_KEY]);

// 2. 代表概念的常量
// 每次你输入Red时，他不会是相同的变量，他只是等于红色作为一个字符串
// Use case 2: constants representing concepts
const COLOR_RED = Symbol('Red');
const COLOR_ORANGE = Symbol('Orange');
const COLOR_YELLOW = Symbol('Yellow');
const COLOR_GREEN = Symbol('Green');
const COLOR_BLUE = Symbol('Blue');
const COLOR_VIOLET = Symbol('Violet');

function getComplement(color) {
    switch (color) {
        case COLOR_RED:
            return COLOR_GREEN;
        case COLOR_ORANGE:
            return COLOR_BLUE;
        case COLOR_YELLOW:
            return COLOR_VIOLET;
        case COLOR_GREEN:
            return COLOR_RED;
        case COLOR_BLUE:
            return COLOR_ORANGE;
        case COLOR_VIOLET:
            return COLOR_YELLOW;
        default:
            throw new Exception('Unknown color: ' + color);
    }
}