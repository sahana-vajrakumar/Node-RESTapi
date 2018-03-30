const express = require('express');
const app = express();
// HTTP request logger middleware for node.js
const morgan = require('morgan');
const bodyParser = require('body-parser');

const processShowsRoutes = require('./api/routes/processShows');

app.use(morgan('dev'));
//set content type to application/json.
app.use(bodyParser.json());

//enabling CORS
app.use((res, req, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
})

//route to processShows controller
app.use('/shows', processShowsRoutes);

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

//exception handling
app.use((error, req, res, next) => {

  let errorMessage;
  res.status(error.status || 500);

  if (error.status == 400) {
    errorMessage = "Could not decode request: JSON parsing failed";

  }

  res.json({

    error: errorMessage || error.message

  })

});

module.exports = app;
