//private - can be only modified inside the class
//public - by default, all field and methods are public
/** You can see the field and constructor argv are repetitive, so we can do it in another way */
class Account {
  nickname?: string

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) throw new Error()
    this._balance += amount
  }
  //you can set pribvate to a method too
  private calculateTax(): void {}

  getBalance(): number {
    return this._balance
  }
}

let account = new Account(1, 'Kai', 2)
account.deposit(100)
// Now the account.balance cannot retrieved from outside
// console.log(account.balance)

//when we want to narrow down class object instead of using type of , we use instance of
// because typeof will always return object
console.log(typeof account)
console.log(account instanceof Account)
