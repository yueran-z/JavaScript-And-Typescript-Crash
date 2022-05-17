

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