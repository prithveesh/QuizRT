import mongoose from 'mongoose';
const config = require('./config');

const openConnection = function() {
  mongoose.connect(config.MONGO_URI);

  mongoose.connection.on('connected', function() {
    console.log('Mongoose is now connected to ', config.MONGO_URI);
  });

  mongoose.connection.on('error', function(err) {
    console.error('Error in Mongoose connection: ', err);
  });

  mongoose.connection.on('disconnected', function() {
    console.log('Mongoose is now disconnected..!');
  });

  process.on('SIGINT', function() {
    mongoose.connection.close(function() {
      console.log('Mongoose disconnected on process termination');
      process.exit(0);
    });
  });
}

module.exports = openConnection;
