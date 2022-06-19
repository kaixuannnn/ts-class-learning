class Account {
  readonly id: number
  owner: string
  balance: number
  nickname?: string

  constructor(id: number, owner: string, balance: number) {
    this.id = id
    this.owner = owner
    this.balance = balance
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error()
    this.balance += amount
  }
}

let account = new Account(1, 'Kai', 2)
account.deposit(100)
console.log(account.balance)

//when we want to narrow down class object instead of using type of , we use instance of
// because typeof will always return object
console.log(typeof account)
console.log(account instanceof Account)
