class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + ' ' + this.lastName
  }
  /** difference between protected and private is protected can be used in inheritant, private cannot */
  protected walk() {
    console.log('walkinggggg...')
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName)
  }

  takeTest() {
    this.walk()
    console.log('taking test.....')
  }
}

class Teacher extends Person {
  /** We can also do this w/o the override, but it will influence the base method
   * we can enable the "noImplicitOverride" to true, so intellisense will remind us
   */
  override get fullName() {
    return 'Professor' + ' ' + super.fullName
  }

  override walk(): void {
    console.log('Professor is walking..')
  }
}

function printNames(people: Person[]) {
  for (let person of people) console.log(person.fullName)
}

printNames([new Student(1, 'Kai Xuan', 'Tan'), new Teacher('Jess', 'Call')])
