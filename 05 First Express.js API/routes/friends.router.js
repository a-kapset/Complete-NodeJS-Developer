const express = require('express')
const friendsController = require('../controllers/friends.controller')

const friendsRouter = express.Router()

// we can define middlewares which are specific and executed only for current router
friendsRouter.use((req, res, next) => {
  console.log(`Request is sent from ip ${req.ip}`)
  next()
})

friendsRouter.post('/', friendsController.postFriend)
friendsRouter.get('/', friendsController.getFriends)
friendsRouter.get('/:friendId', friendsController.getFriend)

module.exports = friendsRouter
