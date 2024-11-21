const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model('Faculty',facultySchema);