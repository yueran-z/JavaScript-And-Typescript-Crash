enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}


enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat }
enum Animal {
    //被視為常數
    none = 0,
    twoLegs = 2 * 3,  //6
    fourLegs = 1 << 1, //2
    CanSwim = 1 << 2, //4
    CanFly = 1 << 3,  //8
    // ReadWrite = Read | Write,
    //被視為計算值
    G = "animl".length
}


// 外部列举 (Ambient enum）:外部列举是用来描述已经存在列举型别的轮廓
declare enum Directions {
    Up = 1,  //常数
    Down, //计算值
    Left,
    Right
}

let directions = Directions.Up;

// 元组可视为严格的阵列型别
// 列举则是使用在已知资料在一定范围的情境下，将所有可能一一列出来