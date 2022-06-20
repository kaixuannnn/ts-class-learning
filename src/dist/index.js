"use strict";
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    // T is Product
    // keyof T => 'name' | 'price
    find(property, value) {
        return this._objects.find(obj => obj[property] === value);
    }
    get objects() {
        return this._objects;
    }
}
let theStore = new Store();
theStore.add({ name: 'milk', price: 150 });
theStore.find('name', 'a');
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
    findName(name) {
        return this._objects.find(obj => obj.name === name);
    }
}
let secondStore = new SearchableStore();
secondStore.add({ name: 'nihao' });
console.log(secondStore.findName('nihao'));
// Fix the generic type parameter
class ProductStore extends Store {
    filterByCatergory(category) {
        return [];
    }
}
//# sourceMappingURL=index.js.map