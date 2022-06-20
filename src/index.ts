// interface constraint
// interface Person {
//   name: string
// }
// interface Ran<T> {
//   hi: T
//   jess: string
// }

// function echo<T extends Person>(value: T): Ran<T> {
//   return { hi: value, jess: 'hi' }
// }

/** Constraint by Class */

class Person {
  constructor(public name: string) {}
}

class Customer extends Person {}

function echo<T extends Person>(value: T): T {
  console.log(value)
  return value
}

echo(new Customer('hihihi'))
