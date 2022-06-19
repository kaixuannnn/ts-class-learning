"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    /** difference between protected and private is protected can be used in inheritant, private cannot */
    walk() {
        console.log('walkinggggg...');
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        this.walk();
        console.log('taking test.....');
    }
}
class Teacher extends Person {
    /** We can also do this w/o the override, but it will influence the base method
     * we can enable the "noImplicitOverride" to true, so intellisense will remind us
     */
    get fullName() {
        return 'Professor' + ' ' + super.fullName;
    }
    walk() {
        console.log('Professor is walking..');
    }
}
function printNames(people) {
    for (let person of people)
        console.log(person.fullName);
}
printNames([new Student(1, 'Kai Xuan', 'Tan'), new Teacher('Jess', 'Call')]);
//# sourceMappingURL=index.js.map