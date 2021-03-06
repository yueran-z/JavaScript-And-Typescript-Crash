/* 20 String Methods */

var stringOne = "GoogleSearching is the best place to learn"
var stringTwo = "frontend and backend development"

// charAt()
console.log(stringOne.charAt(1))

// charCodeAt(): 返回char 'r'的unicode 数字
console.log(stringOne.charCodeAt(1))

// concat()
console.log(stringOne.concat(stringTwo))

// startsWith()：检查字符串是否以指定字符开头
console.log(stringOne.startsWith("free"))

// endsWith()：检查字符串是否以指定的字符串或字符结尾，返回 TRUE、FALSE
console.log(stringOne.endsWith("to"))

// fromCharCode()： 给定字符的unicode,返回char 'r'
console.log(String.fromCharCode(114))


// includes(): 检查字符串是否包含“指定”（specific）字符串
console.log(stringTwo.includes("end"))


// indexOf()：返回指定值第一次出现的位置
console.log(stringTwo.indexOf("end"))

// lastIndexOf()：返回指定值最后找到的位置
console.log(stringTwo.lastIndexOf("end"))

// match()：搜索字符串以查找与正则表达式的匹配并返回
console.log(stringTwo.match(/end/g))

// repeat()：返回包含现有字符串的指定数量的副本
console.log(stringOne.repeat(3))


// replace()：搜索指定值或正则表达式并返回指定值所在的新字符串，通过该替换得到了新字符串
console.log(stringTwo.replace(/end/g, "END"))

// search()：搜索字符串指定值或正则表达式并返回匹配的位置
console.log(stringTwo.search("end"))

// slice()：提取字符串的一部分并返回一个新字符串
console.log(stringTwo.slice(2, 4))

// substr()：与slice()相似，从指定的起始位置开始的字符串中提取字符，并通过数字提取指定字符数量
console.log(stringTwo.substr(2, 4))

// split()：将字符串拆分为字符串数组
console.log(stringOne.split(" "))

// toLowerCase()：
console.log(stringOne.toLowerCase())

// toUpperCase()
console.log(stringOne.toUpperCase())

// trim()：删除两边的空格字符串
var stringThree = "     Subscribe now!      ";
console.log(stringThree.trim())