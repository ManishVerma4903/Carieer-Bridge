import mongoose from "mongoose";

const applicationScheme = new mongoose.Scheme({
    job:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Job",
        required:true
    },
    applicant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    status:{
        type:String,
        enum:["pending","accepted","rejected"],
        default:"pending"
    }
    
},{timestamp:true});

export const Application = mongoose.model('Application',applicationScheme);