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
