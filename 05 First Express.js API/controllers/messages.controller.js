function getMessages(req, res) {
  res.send('<ul><li>Hello_1</li><li>Hello_2</li></ul>')
}

function postMessage(req, res) {
  console.log('Updating messages...')
  res.json()
}

module.exports = {
  getMessages,
  postMessage,
}
