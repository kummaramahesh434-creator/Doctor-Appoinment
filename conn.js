const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', false);

// Validate that MONGO_URI is defined
const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  throw new Error('MongoDB URI is not defined in the environment variables');
}

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('DB connected');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with failure code
  });

module.exports = mongoose; // Export mongoose if you need to use it elsewhere
