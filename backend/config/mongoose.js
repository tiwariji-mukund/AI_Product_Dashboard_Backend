const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/project_development');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in making connection with the Database :: MongoDB'));

db.once('open', () => {
    console.log("Connected to the Database :: MongoDB");
})

module.exports = db;