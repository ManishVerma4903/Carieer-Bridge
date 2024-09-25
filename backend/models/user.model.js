import mongoose from "mongoose";

const userScheme = new mongoose.Schema({
    fullname: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required:true
    },
    password: {
        type: 'string',
        required:true
    },
    role: {
        type: 'string',
        enum:['student','recruiter'],
        required:true
    },
    profile:{
        bio:{type: String,},
        skills : [{type: String}],
        resume:{type: String,}, // url for resume
        resumeOriginalName: {type: String}, 
        company:{type:mongoose.Schema.Types.ObjectId,ref:'Company'},
        profilePhoto:{type: String,default:""}
    },
},{timestamp:true});

export const User = mongoose.model('User',userScheme);