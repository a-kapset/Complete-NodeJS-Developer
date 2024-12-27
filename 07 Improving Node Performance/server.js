const express = require('express')

const app = express()

function delay(duration) {
  const start = Date.now()
  while (Date.now() - start < duration) {
    // event loop is blocked here
  }
}

app.get('/', (req, res) => {
  res.send('Performance example')
})

app.get('/timer', (req, res) => {
  delay(5000)
  res.send('Ding-ding! Wake up')
})

app.listen(3000)
