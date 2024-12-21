const http = require('http')

const PORT = 3000

const friends = [
  {
    id: 0,
    name: 'Friend_0',
  },
  {
    id: 1,
    name: 'Friend_1',
  },
  {
    id: 2,
    name: 'Friend_2',
  },
]

const server = http.createServer()

server.on('request', (req, res) => {
  const items = req.url.split('/') // '/friends/2' => ['', 'friends', '2']

  if (req.method === 'POST' && items[1] === 'friends') {
    req.on('data', (data) => {
      const friend = data.toString()
      console.log(`Request data is ${friend}`)
      friends.push(JSON.parse(friend))
    })

    req.pipe(res)
  }

  if (req.method === 'GET' && items[1] === 'friends') {
    res.statusCode = 200
    res.setHeader('Content-type', 'application/json')
    if (items.length === 3) {
      const friendsIndex = parseInt(items[2]) // or +items[2] or Number(items[2])
      res.end(JSON.stringify(friends[friendsIndex]))
    } else {
      {
        res.end(JSON.stringify(friends))
      }
    }
  }

  if (req.method === 'GET' && items[1] === 'message') {
    res.write('<html>')
    res.write('<body>')
    res.write('<ul>')
    res.write('<li>Bóbr, kurwa!</li>')
    res.write('<li>Ja pierdolię...</li>')
    res.write('</ul>')
    res.write('</body>')
    res.write('</html>')
    res.end()
  }
  if (items[1] === '') {
    res.statusCode = 404
    res.end()
  }
})

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

// window
//   .fetch('http://localhost:3000/friends', {
//     method: 'POST',
//     body: JSON.stringify({
//       id: 3,
//       name: 'Friend_3',
//     }),
//   })
//   .then((response) => response.json())
//   .then((friend) => console.log(friend))
