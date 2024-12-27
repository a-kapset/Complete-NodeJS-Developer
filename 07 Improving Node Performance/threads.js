const { isMainThread, workerData, Worker } = require('node:worker_threads')

if (isMainThread) {
  console.log(`Main Thread. Process id is ${process.pid}`)
  new Worker(__filename, {
    workerData: [7, 4, 6, 5],
  })
  new Worker(__filename, {
    workerData: [1, 3, 2, 4],
  })
} else {
  console.log(`Worker. Process id is ${process.pid}`)
  console.log(`Sorted worker data is ${workerData.sort()}`)
}
