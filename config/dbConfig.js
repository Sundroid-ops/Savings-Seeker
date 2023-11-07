const { mongoose } = require('mongoose');
require('dotenv').config();

async function mongoConnect() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('Connected to DB');
  } catch (err) {
    console.error(err);
  }
}

module.exports = mongoConnect ;