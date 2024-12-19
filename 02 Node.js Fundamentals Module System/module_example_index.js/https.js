const internals = require('./internals')

function makeRequest(url, data) {
  internals.request.send(url, data)
  return internals.response.read()
}

const result = makeRequest('https://www.google.com', 'data for request')
console.log(result)

console.log('=========================================================')
console.log(require.cache)
