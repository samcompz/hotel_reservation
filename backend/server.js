const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Connect to the MongoDB database
// mongoose.connect('mongodb://localhost/hotel-reservation', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false
// }).then(() => {
//   console.log('Connected to database');
// }).catch(error => {
//   console.error('Error connecting to database:', error);
// });

// Set up routes for the API
app.use('/api/reservations', require('./backend/routes/reservation'));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
