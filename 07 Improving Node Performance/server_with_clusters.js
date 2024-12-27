const express = require('express')
const os = require('node:os')
const cluster = require('node:cluster')
cluster.schedulingPolicy = cluster.SCHED_RR // set round-robin policy for Windows OS

const app = express()

function delay(duration) {
  const start = Date.now()
  while (Date.now() - start < duration) {
    // event loop is blocked here
  }
}

app.get('/', (req, res) => {
  res.send(`Performance example ${process.pid}`)
})

app.get('/timer', async (req, res) => {
  delay(7000)

  res.send(`Ding-ding! Wake up ${process.pid}`)
})

if (cluster.isPrimary) {
  console.log('>>>>> Master process started')
  const NUM_WORKERS = os.cpus().length
  for (let i = 0; i < NUM_WORKERS; i++) {
    cluster.fork()
  }
} else {
  console.log(`>>>>> Worker process started with id ${process.pid}`)
  app.listen(3000)
}
