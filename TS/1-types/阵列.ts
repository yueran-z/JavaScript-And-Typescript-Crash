// 阵列」是由相同类型的元素（element）的集合所组成的「有序的」资料结构，而阵列里的资料型别不限，要放数字、字串、阵列甚至是物件都可以。
let resouce: (string | number)[] = ['hello', 'ya', 'yeah'];
let resouce2: Array<string | number> = ['hello', 'ya', 'yeah'];


// 遍历阵列
// 注：for...in 主要用来遍历物件
let scores: number[] = [10, 20, 30, 40];

for (let score of scores) {
    console.log(score);     //10 20 30 40
}

// 复制阵列:使用 ES6 展开 (spread) 运算子,两个阵列独立，不互相影响。
let origScores: number[] = [10, 20, 30];
let clonedScores = [...origScores];

// 合并阵列
let score1: number[] = [10, 20, 30];
let score2: number[] = [40, 50, 60];

let mergedScore = [...score1, ...score2];
console.log(mergedScore);   //[ 10, 20, 30, 40, 50, 60 ]

// 阵列解构
let arr1: number[] = [12, 13]
let [x, y] = arr1
console.log(x)  //12
console.log(y)  //13