const mongoose = require('mongoose');

const MONGO_URL = `mongodb+srv://kapsetstorage:yUjmt8OpmWW3jNau@cluster0.gmtbw.mongodb.net/nasa?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connection.once('open', () => {
  console.log('MongoDB connection is ready!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
