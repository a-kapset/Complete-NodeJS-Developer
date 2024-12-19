module.exports = {
  request: require('./request'),
  response: require('./response'),
}

// // alternative way to export from index.js
// const request = require('./request')
// const response = require('./response')
// module.exports = {
//   send: request.send,
//   read: response.read,
// }

// // yet one alternative way to export from index.js
// module.exports = {
//   ...require('./request'),
//   ...require('./response'),
// }
