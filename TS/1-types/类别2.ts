// 在 TS 中类别有些属性，我们希望只在类别内部操作，这时候会使用 private 修饰符，如此，该属性就无法在外部存取，提高资料的安全性

// 第一种方式是透过 public 的建构函式，在实例化类别时传入参数进行赋值；
// 第二种就是下面会提到的存取器方法 getter 和 setter。

// 存取器（Accessors）- getter 和 setter
let passcode = "secret passcode";

class Employee {
    private _fullName: string;
// 取值方法（Getter）因为是模拟`呼叫属性的方式进行物件的取值`，因此不能有任何参数，而且一定要有回传值，否则会报错。
    get fullName(): string {
        return this._fullName;
    }
// 而存值方法 (Setter) 则是模拟`指派任何值到属性的方式进行物件的存值`，只能有一个参数

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("錯誤: 沒有授權");
        }
    }
}

//實例化類別 Employee
let employee = new Employee();

employee.fullName = "Una Lin";
if (employee.fullName) {
    alert(employee.fullName); //Una Lin
}
