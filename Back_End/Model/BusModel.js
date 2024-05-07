const mongoose = require('mongoose');

// Replace 'your_database_name' with the name of your database
const dbName = 'Bus_Book';

// Replace 'mongodb://localhost/' with your MongoDB connection string
const dbURI = 'mongodb://localhost:27017/' + dbName;

mongoose.connect(dbURI);

const db = mongoose.connection;

// Event listeners for connection
db.on('connected', () => {
  console.log(`Connected to MongoDB database ${dbName}`);
});
const userSchema = new mongoose.Schema({
  "name":String,
  "from":String,
  "to":String,
  "seat":Number,
  "cab":String,
  "date":String,
  "Book":Boolean,
  "dates":String
  });
  const userSchema1 = new mongoose.Schema({
    "name":String,
    "from":String,
    "to":String,
    "seat":Number,
    "cab":String,
    "date":String,
    "Book":Boolean,
    "dates":String
    });
  
  // Create the model
  const  Busdetails= mongoose.model('busdetails', userSchema);
  const  busdetails1= mongoose.model('bus_1', userSchema);
  const  busdetails2= mongoose.model('bus_2', userSchema1);
  const  busdetails3= mongoose.model('bus_3', userSchema);


  
  module.exports ={Busdetails,busdetails1,busdetails2,busdetails3};