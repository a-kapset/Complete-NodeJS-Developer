const launchesModel = require('../../models/launches.model');

async function httpGetAllLaunches(req, res) {
  return res.status(200).json(await launchesModel.getAllLaunches());
}

async function httpAddNewLaunch(req, res) {
  const launch = req.body; // launch is already JSON here since app.use(express.json()) is applied in app.js

  if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target)
    return res.status(400).json({ error: 'Missing required launch property' });

  launch.launchDate = new Date(launch.launchDate);

  if (isNaN(launch.launchDate))
    return res.status(400).json({ error: 'Invalid launch date' });

  await launchesModel.scheduleNewLaunch(launch);

  return res.status(201).json(launch);
}

async function httpAbortLaunch(req, res) {
  const launchId = Number(req.params.id);

  if (!(await launchesModel.existsLaunchWithId(launchId)))
    return res.status(404).json({ error: 'Launch not found' });

  const aborted = await launchesModel.abortLaunchById(launchId);

  if (!aborted) return res.status(400).json({ error: 'Launch not aborted' });

  return res.status(200).json({ ok: true });
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch,
};
