const express = require('express')
const friendsRouter = require('./routes/friends.router')
const messagesRouter = require('./routes/messages.router')

const app = express()
const PORT = 3000

app.use((req, res, next) => {
  const start = Date.now()
  next()
  const delta = Date.now() - start
  console.log(`Method: ${req.method} | url: ${req.baseUrl}${req.url} | duration: ${delta} ms`)
})

app.use(express.json())

app.use('/friends', friendsRouter)
app.use('/messages', messagesRouter)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
