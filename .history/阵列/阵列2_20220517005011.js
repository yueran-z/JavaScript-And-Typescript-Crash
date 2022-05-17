// 针对某一个索引数

// 取出某一个值,把值放到阵列的某个位置来
// splice(start, deleteCount,Insert-Val-of-index)

ary1 = ['A', 'B', 'C', 'D', 'E', 'F']
console.log(ary1.splice(2))
console.log(ary1.splice(2, 1)) //取出某一个值
console.log(ary1.splice(2, 0, 'MDN')) //把值放到阵列的某个位置来

// 