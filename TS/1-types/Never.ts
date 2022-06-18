// never表示那些永远不存在的值得型别，更具体来说像是：
// 應該要回傳，但卻沒有回傳值的函式（例如：如果函式內有無窮迴圈，沒有任何結束的執行點）
// 總是會拋出錯誤的函式

// 回传 void 的函式不会终止函式，也就是说虽然没有回传值，但函式会继续执行；
// 但是，回传 never 型别的函式则是应该会回传，但由于函式中断执行或者是无限回圈，因而永远不会回传或回传错误的函式。


// never是所有型别的子型别，且可以赋值给所有类型
// 简单来说，所有型别中都包含never,

function TestNever (x: string | number):boolean | never {
    if(typeof x === "string"){
        return true;
    }else if(typeof x === 'number'){
        return false;
    }

    return fail("message failed");
}

function fail(message: string):never {
    throw new Error(message);
}

// function fail() {//TS推论回传值为never
//     return error("Something failed");
// }


