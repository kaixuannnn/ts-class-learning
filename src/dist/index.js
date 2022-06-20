"use strict";
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    get objects() {
        return this._objects;
    }
}
// let store = new Store<Product>();
// In this case, we will have array objects with Product shape
// Pass on the generic type parameter
class CompressibleStore extends Store {
    compress() { }
}
let newStore = new CompressibleStore();
newStore.add(5);
console.log(newStore.objects);
//Restrict the generic type parameter
class SearchableStore extends Store {
    find(name) {
        return this._objects.find(obj => obj.name === name);
    }
}
let secondStore = new SearchableStore();
secondStore.add({ name: 'nihao' });
console.log(secondStore.find('nihao'));
//# sourceMappingURL=index.js.map