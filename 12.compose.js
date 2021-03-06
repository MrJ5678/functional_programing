const reverse = arr => arr.reverse()
const first = arr => arr[0]
const toUpper = str => str.toUpperCase()

function compose(...args) {
  return function (value) {
    return args.reverse().reduce(function (acc, fn) {
      return fn(acc)
    }, value)
  }
}

const compose1 = (...args) => value => args.reverse().reduce(((acc, fn) => fn(acc)), value)

const f = compose1(toUpper, first, reverse)
console.log(f(["one", "two", "three"]))
