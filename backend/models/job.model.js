import mongoose, { Types } from "mongoose";

const jobScheme = new mongoose.Scheme({
    title:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    requirements:[{
        type:String,
    }],
    salary:{
        type:Number,
        required:true
        
    },
    experienceLevel:{       // by himanshi 
     type: Number,
     required:true,
    },
    location:{
        type:String,
        required:true
    },
    jobType:{
        type:String,
        required:true
    },
    position:{
        type:Number,
        required:true
    },
    company:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Company',
        required:true,
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    application:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Application',
    }
},{timestamp:true})

export  const Job = mongoose.model('Job', jobScheme);