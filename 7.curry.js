// function checkAge(age) {
//   let mini = 18
//   return age > mini
// }

// function checkAge(min) {
//   return function (age) {
//     return age > min
//   }
// }
const checkAge = min => age => age > min

let checkAge18 = checkAge(18)
console.log(checkAge18(20))
let checkAge20 = checkAge(20)
console.log(checkAge20(24));