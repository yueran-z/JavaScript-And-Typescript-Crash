// Prefer ES2015/ES6 classes over ES5 plain functions
// GOOD

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