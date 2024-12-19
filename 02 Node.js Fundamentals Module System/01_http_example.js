const http = require('http')
const https = require('https') // for requests with https protocol
const { request, get } = require('https')

// const https = require('node:https') // use 'node:' to import core built-in node module

const req = http.request('http://www.google.com', (res) => {
  res.on('data', (chunk) => {
    console.log(`Data chunk is: ${chunk}`)
  })

  res.on('end', () => {
    console.log('No more data')
  })
})
req.end()

const req2 = request('https://www.google.com', (res) => {
  res.on('data', (chunk) => {
    console.log(`Data chunk is: ${chunk}`)
  })

  res.on('end', () => {
    console.log('No more data')
  })
})
req2.end()

get('https://www.google.com', (res) => {
  res.on('data', (chunk) => {
    console.log(`Data chunk is: ${chunk}`)
  })

  res.on('end', () => {
    console.log('No more data')
  })
})
