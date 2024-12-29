const http = require('http')
const mongoose = require('mongoose')
const app = require('./app')
const { loadPlanetData } = require('./models/planets.model')

const PORT = process.env.PORT || 8000
const MONGO_URL = `mongodb+srv://kapsetstorage:yUjmt8OpmWW3jNau@cluster0.gmtbw.mongodb.net/nasa?retryWrites=true&w=majority&appName=Cluster0`

const server = http.createServer(app)

mongoose.connection.once('open', () => {
  console.log('MongoDB connection is ready!')
})

mongoose.connection.on('error', (err) => {
  console.error(err)
})

async function startServer() {
  await mongoose.connect(MONGO_URL)
  await loadPlanetData()
  server.listen(PORT, () => console.log(`Server is listening on ${PORT}`))
}

startServer()
