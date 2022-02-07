const mongoose = require('mongoose');
//const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: 'email address is required',
        match: [/\S+@\S+\.\S+/, 'is invalid']
    },
    idnumber: {
        type: String,
        required: true
    }
})

//userSchema.plugin(uniqueValidator, {message: 'is taken'});

module.exports = mongoose.model('User', userSchema);