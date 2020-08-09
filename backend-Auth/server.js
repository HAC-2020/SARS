const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const MONGO_URI =
    'mongodb+srv://ritvij14:passwordisopen@user-auth.dp0yp.mongodb.net/patients?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server is up and running.')
})

//using dependencies
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//handling CORS
app.use(cors());

app.get("/", (req, res) => res.status(200).json({
    message: "Welcome to Symptom Checker auth"
}));

app.use('/patient', require('./routes/patientRouter'));
app.use('/record', require('./routes/recordRouter'));

app.use((req, res, next) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
});

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    error: error.message,
  })
});
