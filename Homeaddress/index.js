const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const register = require('./register');
const cors = require('cors');

const url = 'mongodb://localhost/signup';
const app = express();
const PORT = 9000;

// connecting to mongodb database
mongoose.connect(url, {useNewUrlParser:true});
mongoose.connection.once('open', function(){
    console.log('connection made to database')
}).on('error', (error) => {
    console.log('error is:', error);
});

app.use(bodyParser.json());
app.use('/', cors(), register);
app.use(express.static('signup-form'));

app.listen(PORT, () => console.log(`server is up and running on port ${PORT}`));