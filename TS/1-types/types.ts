let code:number = 123
let employ = code as number

// 型别断言：手動指定資料型別，可以覆蓋掉 TS 自動推論的資料型別
interface typeArgs{
    name: string;
    age: number;
}
const TypeArgs = {} as typeArgs;
const TypeArgs2 =<typeArgs>{}

TypeArgs.name = "amy"


function getLength(something: string | number): number {
    if ((<string>something).length) {
        return (<string>something).length;
    }else{
        return something.toString().length;
    }
}