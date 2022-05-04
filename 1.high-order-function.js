function once(func) {
  let done = false
  return function() {
    if(!done) {
      done = true
      console.log(this);
      func.apply(null, arguments)
    }
  }
}

let pay = once(function(money) {
  console.log(`支付 ${money} RMB`);
})

pay(88)