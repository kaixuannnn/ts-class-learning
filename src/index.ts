class Ride {
  private static _activeRides: number = 0

  start() {
    Ride._activeRides++
  }

  stop() {
    Ride._activeRides--
  }

  static get activeRides() {
    return Ride._activeRides
  }
}

let ride1 = new Ride()
ride1.start()

let ride2 = new Ride()
ride2.start()

console.log(Ride.activeRides)
//1
//1
/**As you can see the results, it is 1 respectively,
 * it is because the memories is belong to the each object independently.
 * However, we need a share memory belongs to a class, so we use StaticMembers
 */
