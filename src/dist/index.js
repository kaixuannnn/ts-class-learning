"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error();
        this.balance += amount;
    }
}
let account = new Account(1, 'Kai', 2);
account.deposit(100);
console.log(account.balance);
console.log(typeof account);
//# sourceMappingURL=index.js.map