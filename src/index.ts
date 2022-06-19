// let person = {
// }

// person.name = 'a'
/** in this case, this throw an error, as you know typescript is very strict on it object pattern,
 * therefore, we can use index signatures
 */

class SeatAssigment {
  [seatNumber: string]: string
}

let seats = new SeatAssigment()
seats.A1 = 'Kai'
seats.A2 = 'Xuan'
seats['A3'] = 'Tan'
