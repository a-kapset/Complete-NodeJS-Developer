const express = require('express')

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

app.listen(3000)
