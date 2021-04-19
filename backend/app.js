const express = require('express');
const bodyParser = require('body-parser');
const courseRoute = require('./routes/course-route.js');
const userRoute = require('./routes/user-route');
const HttpError = require('./models/http-error');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json()); // tell the system we want the request be parsed to be json 

app.use('/course', courseRoute);
app.use('/user', userRoute);

app.use((req, res, next) => { // error handler for unsupported route
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((error, req, res, next) => { // 4 parameters = default error handler middleware
  if (res.headerSent) { // if response is sent, since response could only be sent once in total, 
    return next(error); //  forward the error to the next middleware to handle it 
  }
  res.status(error.code || 500); // else, sent the error response 
  res.json({message: error.message || 'An unknown error occurred!'})

});

mongoose
  .connect(
    `mongodb+srv://cayden:WWgu2XCULtKK4aSx@cluster0.ecazw.mongodb.net/iimt4601?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(5000);
  })
  .catch(err => {
    console.log(err);
  });
