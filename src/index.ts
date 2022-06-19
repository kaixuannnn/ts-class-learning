class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + ' ' + this.lastName
  }

  walk() {
    console.log('walkinggggg...')
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName)
  }

  takeTest() {
    console.log('taking test.....')
  }
}

const kaixuan = new Student(1, 'kai', 'xuan')
console.log(kaixuan.takeTest())
