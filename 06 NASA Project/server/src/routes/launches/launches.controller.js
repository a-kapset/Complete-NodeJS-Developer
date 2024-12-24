const { launches } = require('../../models/launches.model')

function getAllLaunches(res, res) {
  return res.status(200).json(Array.from(launches.values()))
}

module.exports = {
  getAllLaunches,
}
