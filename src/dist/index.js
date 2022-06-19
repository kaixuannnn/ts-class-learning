"use strict";
class Ride {
    start() {
        Ride.activeRides++;
    }
    stop() {
        Ride.activeRides--;
    }
}
Ride.activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);
//1
//1
/**As you can see the results, it is 1 respectively,
 * it is because the memories is belong to the each object independently.
 * However, we need a share memory belongs to a class, so we use StaticMembers
 */
//# sourceMappingURL=index.js.map