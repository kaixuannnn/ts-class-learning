abstract class Shape {
  constructor(public color: string) {}

  /** abstract method can only be used in abstract class */
  abstract render(): void
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color)
  }

  override render(): void {
    console.log('Rendering a circle...')
  }
}

/** In this case, we dont want to render a shape , as it is illogical
 * so we use abstract class, abstract class is meant to be used for draft and simple class,
 * which can not be initiated
 */
// let shape = new Shape('red');
// shape.render()
