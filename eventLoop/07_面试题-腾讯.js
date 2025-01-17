console.log(1)

setTimeout(() => {
  Promise.resolve().then(() => {
    console.log(2)
  })
}, 0)

console.log(3)

new Promise((resolve) => {
  for (let i = 0; i <= 1000; i++) {
    if (i === 1000) {
      resolve()
    }
  }
})
  .then(() => {
    console.log(4)
  })
  .then(() => {
    console.log(5)
  })

console.log(6)

// 1 3 6 4 5 2
