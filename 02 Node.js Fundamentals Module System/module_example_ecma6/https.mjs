import { send } from './request.mjs'
import { read } from './response.mjs'

function makeRequest(url, data) {
  send(url, data)
  return read()
}

const result = makeRequest('https://www.google.com', 'data for request')
console.log(result)
