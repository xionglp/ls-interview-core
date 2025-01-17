setTimeout(() => {
  console.log("log-timeout")
}, 0)

const promise = new Promise((resolve) => {
  console.log("log-promise")
  resolve("promise resolve")
})

;(async () => {
  console.log("async start")
  const str = await promise
  console.log(str)
})()

promise.then(() => {
  console.log("log-promise1-then")
})

console.log("log-end")

// log-promise
// async start
// log-end
// promise resolve
// log-promise1-then
// log-timeout
