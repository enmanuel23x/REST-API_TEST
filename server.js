const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//const
const version = '/v1';

// api routes
app.use(version+'/client', require('./src/routes/clientRouter'));
app.use(version+'/payment', require('./src/routes/paymentRouter'));


module.exports = app
