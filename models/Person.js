const mongoose = require('mongoose');
const validator = require('validator');

const personSchema = mongoose.Schema({
    idNumber:{
        type:Number,
        required:true,
        trim:true
    },
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    birthDate:{
        type:Date,
        required:true,
        trim:true
    },
    gender:{
        type:String,
        required:true,
        trim:true
    }
})

const Person = mongoose.model('Person',personSchema);
module.exports = Person;