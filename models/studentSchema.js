const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        require:true
    },
    roll_no:{
        type:Number,
        required:true
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

module.exports = mongoose.model('Student',studentSchema);