const dotenv = require('dotenv');
dotenv.config();
/*var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    });*/
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var aylien = require("aylien_textapi");
/* Middleware*/
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()


//use midldleware and express
app.use(express.static('dist'))
app.use(bodyParser.json());
console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

