const path = require('path')
const express = require('express')
const friendsRouter = require('./routes/friends.router')
const messagesRouter = require('./routes/messages.router')

const PORT = 3000

const app = express()
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.use((req, res, next) => {
  const start = Date.now()
  next()
  const delta = Date.now() - start
  console.log(`Method: ${req.method} | url: ${req.baseUrl}${req.url} | duration: ${delta} ms`)
})

app.use('/site', express.static(path.join(__dirname, 'public')))
app.use(express.json())

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Title for hbs',
    caption: 'Caption for hbs',
  })
})

app.use('/friends', friendsRouter)
app.use('/messages', messagesRouter)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
