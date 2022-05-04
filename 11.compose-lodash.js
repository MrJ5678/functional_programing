let _
const reverse = arr => arr.reverse()
const first = arr => arr[0]
const toUpper = str => str.toUpperCase()

import("./utils/lodash.js").then(
  res => {
    _ = res.default

    const f = _.flowRight(toUpper, first, reverse)
    console.log(f(['one', 'two', 'three']));

  }
)
