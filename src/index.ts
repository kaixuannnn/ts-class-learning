class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value]
  }
}

let numbers = ArrayUtils.wrapInArray(1)

function wrapInArray<T>(value: T) {
  return [value]
}

const array = wrapInArray<string>('a')
