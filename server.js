// Requiring and configuring the .env file to access its variables
require('dotenv').config();
// Requiring express
const express = require('express');
// Creating the express server and storing inside the app variable
const app = express();
// Port in which the server will run on
const PORT = process.env.PORT || 8000;
// Requiring example router
const userRouter = require('./routes/users.js');
const ownerRouter = require('./routes/owners.js');
const locationRouter = require('./routes/locations.js')

// Configuring the server to accept and parse JSON data.
app.use(express.json());

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');

//Custom Middlware
app.use((req, res, next) => {
  console.log(`A ${req.method} request was made to ${req.url}`);
  next();
});

// Connecting the router to the server
app.use('/users', userRouter);
app.use('/owners', ownerRouter);
app.use('/locations', locationRouter);

app.get('/', (req, res) => {
  res.send("Base")
})

// Error Handling Middlware
app.use((err, req, res, next) => {
  res.status(500).send('Something went wrong.');
});

// Calling the listen function telling the server to listen on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
