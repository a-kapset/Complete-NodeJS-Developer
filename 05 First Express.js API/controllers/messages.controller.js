const path = require('path')

function getMessages(req, res) {
  res.render('messages', {
    title: 'Bobr',
    friend: 'Kurwa',
  })
  // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg'))
}

function postMessage(req, res) {
  console.log('Updating messages...')
  res.json()
}

module.exports = {
  getMessages,
  postMessage,
}
