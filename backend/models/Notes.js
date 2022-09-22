// import mongoose from 'mongoose';
const mongoose = require('mongoose');
// const { Schema } = mongoose;

const NotesSchema = new Schema({
    title:{
        type: String,
        required:true,
    },
    description:{
        type: String,
        required:true,
    },
    tag:{
        type: String, 
        default:general,
    },
    date:{
        type: String,
        default: Date.now
    }
});
module.exports=mongoose.model('user',NotesSchema);