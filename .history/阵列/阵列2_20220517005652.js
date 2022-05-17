// 针对某一个索引数

// 取出某一个值,把值放到阵列的某个位置来
// splice(start, deleteCount,Insert-Val-of-index)

ary1 = ['A', 'B', 'C', 'D', 'E', 'F']
console.log(ary1.splice(2))
console.log(ary1.splice(2, 1)) //取出某一个值
console.log(ary1.splice(2, 0, 'MDN')) //把值放到阵列的某个位置来

// 判断某个值是不是在阵列里面
ary.indexOf('Z') //找不到会回传-1
// 假如阵列有重复
ary.lastIndexOf('A')

// 传一个条件去检查，看每一个回传true/false
//some,every,forEach,splice

// 产生另外一个新的阵列
slice(start, end)