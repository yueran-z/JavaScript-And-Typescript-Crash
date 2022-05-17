// Prefer ES2015/ES6 classes over ES5 plain functions
// !!GOOD
class Animal {
    constructor(age) {
        this.age = age;
    }
    move() {
        /* ... */ }
}
class Mammal extends Animal {
    constructor(age, furColor) {
        super(age);
        this.furColor = furColor;
    }
    liveBirth() {
        /* ... */ }
}
class Human extends Mammal {
    constructor(age, furColor, languageSpoken) {
        super(age, furColor);
        this.languageSpoken = languageSpoken;
    }
    speak() {
        /* ... */ }
}
//!! BAD
const Animal = function (age) {
    if (!(this instanceof Animal)) {
        throw new Error('Instantiate Animal with `new`');
    }

    this.age = age;
};
Animal.prototype.move = function move() {};
const Mammal = function (age, furColor) {
    if (!(this instanceof Mammal)) {
        throw new Error('Instantiate Mammal with `new`');
    }
    Animal.call(this, age);
    this.furColor = furColor;
};
Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;
Mammal.prototype.liveBirth = function liveBirth() {};
const Human = function (age, furColor, languageSpoken) {
    if (!(this instanceof Human)) {
        throw new Error('Instantiate Human with `new`');
    }
    Mammal.call(this, age, furColor);
    this.languageSpoken = languageSpoken;
};
Human.prototype = Object.create(Mammal.prototype);
Human.prototype.constructor = Human;
Human.prototype.speak = function speak() {};

// Use getters and setters
function makeBankAccount() {
    let balance = 0;
    function getBalance() {
        return balance;
    }
    function setBalance(amount) {
        balance = amount;
    }
    return {
        getBalance,
        setBalance
    };
}
const account = makeBankAccount();
account.setBalance(100);
console.log(account.getBalance());

// Make objects have private members
const Employee = function (name) {
    return {
        getName() {
            return name;
        },
    };
};
const employee = new Employee('John Doe');
console.log(`Employee name: ${employee.getName()}`);
delete employee.name;
console.log(`Employee name: ${employee.getName()}`);

//!! Prefer composition over inheritance:
//!!!! Bad because Employees "have" tax data. EmployeeTaxData is not a type of Employee
//GOOD:人类属于动物类型，这种建议继承，用户有detail但detail不属于用户类型，你就使用聚合（复用主函数er）
class EmployeeTaxData {
    constructor(ssn, salary) {
        this.ssn = ssn;
        this.salary = salary;
    }
}
class Employee {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    setTaxData(ssn, salary) {
        this.taxData = new EmployeeTaxData(ssn, salary);
    }
}