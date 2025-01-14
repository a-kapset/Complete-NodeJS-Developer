const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const api = require('./routes/api');

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(morgan('combined'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/v1', api);

app.get('/*', (req, res) => {
  return res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
}); // https://create-react-app.dev/docs/deployment#serving-apps-with-client-side-routing

module.exports = app;
