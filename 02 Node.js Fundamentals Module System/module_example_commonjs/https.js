const { send } = require('./request')
const { read } = require('./response')

function makeRequest(url, data) {
  send(url, data)
  return read()
}

const result = makeRequest('https://www.google.com', 'data for request')
console.log(result)

console.log('=========================================================')
console.log(require.cache)
