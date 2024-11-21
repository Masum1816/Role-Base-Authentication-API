
const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: { 
        type: String, 
        enum: ['master', 'principal', 'faculty', 'student'], 
        required: true 
    }
})

const registerUserSchema = mongoose.model('registerUser', Schema);
module.exports = registerUserSchema;








