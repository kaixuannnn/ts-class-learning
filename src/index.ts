//private - can be only modified inside the class
//public - by default, all field and methods are public
class Account {
  readonly id: number
  owner: string
  private _balance: number
  nickname?: string

  constructor(id: number, owner: string, balance: number) {
    this.id = id
    this.owner = owner
    this._balance = balance
  }

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
