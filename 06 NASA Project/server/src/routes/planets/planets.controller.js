const planetsModel = require('../../models/planets.model')

async function httpGetAllPlanets(req, res) {
  return res.status(200).json(await planetsModel.getAllPlanets())
}

module.exports = {
  httpGetAllPlanets,
}
