const EventEmitter = require('events')

const celebrity = new EventEmitter() // "celebrity" is a subject which emits events

// subscribe to celebrity for observer 1
celebrity.on('race win', function () {
  console.log('Congrats!')
})

// subscribe to celebrity for observer 2
celebrity.on('race win', function () {
  console.log('Boooo...')
})

// subscribe to celebrity for observer 3
celebrity.on('race', function (result) {
  if (result === 'win') console.log(`This is a victory!`)
})

/**
 * The "process" object is an instance of EventEmitter
 * https://nodejs.org/api/process.html#process
 */
process.on('exit', (code) => {
  console.log('Process exit event with code: ', code)
})

celebrity.emit('race win') // for observer 1 and 2
celebrity.emit('race', 'win') // for observer 3
