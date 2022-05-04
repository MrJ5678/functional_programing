// curry-demo
// "".match(/\s+/g)
// "".match(/\d+/g)
let mod
import("./utils/lodash.js").then(
  res => {
    mod = (res.default);
  }
).then(() => {
  let curried = mod.curry(getSub)
  console.log(curried);
})
// console.log(_);
// function match(reg, str) {
//   return str.match(reg)
// }

function getSub(a, b, c) {
  return a + b + c
}

const match = _.curry(function (reg, str) {
  return str.match(reg)
})
const haveSpace = match(/\s+/g)
const haveNum = match(/\d+/g)
// console.log(haveSpace("hello world"));
// console.log(haveNum("123abc"));

const filter = _.curry(function (func, array) {
  return array.filter(func)
})

// console.log(filter(haveSpace, ["j ld", "j_ld"]))
// console.log(filter(haveSpace)(["j ld", "j_ld"]))

const findSpace = filter(haveSpace)
console.log(findSpace(["j ld", "j_ld"]));