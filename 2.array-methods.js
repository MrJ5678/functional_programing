// map
const map = (array, func) => {
  let results = []
  for (const value of array) {
    results.push(func(value))
  }
  return results
}

// a = [1,2,3,4,5]
// console.log(map(a, function (item) {
//   return item * 2
// }))

// every
// const every = (array, func) => {
//   let result = true
//   for (const value of array) {
//     result = func(value)
//     if(!result) {
//       break
//     }
//   }
//   return result
// }

// some
const some = (array, func) => {
  let result = false
  for (const value of array) {
    result = func(value)
    if(result) {
      break
    }
  }
  return result
}

let a = [1,2,3,4,5]
console.log(some(a, v => v < 5))