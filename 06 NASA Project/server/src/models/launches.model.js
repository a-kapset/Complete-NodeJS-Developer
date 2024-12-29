const launches = require('./launches.mongo')
const planets = require('./planets.mongo')

let latestFlightNumber = 100

const launch = {
  flightNumber: 100,
  mission: 'Kepler Exploration X',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 27, 2030'),
  target: 'Kepler-442 b',
  customers: ['ZTM', 'NASA'],
  upcoming: true,
  success: true,
}

saveLaunch(launch)

async function getAllLaunches() {
  return await launches.find({}, { __v: 0, _id: 0 }) // __v & _id are excluded from db response
}

async function saveLaunch(launch) {
  const planet = await planets.findOne({ keplerName: launch.target })

  if (!planet) throw new Error('No matching files found')

  await launches.updateOne(
    {
      flightNumber: launch.flightNumber,
    },
    launch,
    { upsert: true }
  )
}

function addNewLaunch(launch) {
  latestFlightNumber++
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      flightNumber: latestFlightNumber,
      customers: ['ZTM', 'NASA'],
      upcoming: true,
      success: true,
    })
  )
}

function existsLaunchWithId(launchId) {
  return launches.has(launchId)
}

function abortLaunchById(launchId) {
  const aborted = launches.get(launchId)
  aborted.upcoming = false
  aborted.success = false
  return aborted
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
  existsLaunchWithId,
  abortLaunchById,
}
