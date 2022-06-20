/** Extendinng Generic Class*/
interface Product {
  name: string
  price: number
}

class Store<T> {
  protected _objects: T[] = []

  add(obj: T): void {
    this._objects.push(obj)
  }
  get objects() {
    return this._objects
  }
}

// let store = new Store<Product>();
// In this case, we will have array objects with Product shape

// Pass on the generic type parameter
class CompressibleStore<T> extends Store<T> {
  compress() {}
}

let newStore = new CompressibleStore<number>()
newStore.add(5)
console.log(newStore.objects)

//Restrict the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this._objects.find(obj => obj.name === name)
  }
}

let secondStore = new SearchableStore()
secondStore.add({ name: 'nihao' })
console.log(secondStore.find('nihao'))

// Fix the generic type parameter
class ProductStore extends Store<Product> {
  filterByCatergory(category: string): Product[] {
    return []
  }
}
