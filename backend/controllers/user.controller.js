import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// regester user

export const register = async (req,res) =>{
    try {
        const {fullname, email, phoneNumber,  password, role} = req.body;
        if(!fullname || !email || !phoneNumber || !password || !role){
            return res.status(400).json({
                message: "something is missing",
                 success: false});
        }

        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                message: "User already exists with this email",
                 success: false});
        }

        const hashPassword = await bcrypt.hash(password,10);

        await User.create({
            fullname,
            email,
            phoneNumber,
            password : hashPassword,
            role
        });

        return res.status(201).json({
            message: "User registered successfully",
             success: true});

    }catch(error){
        console.log(error);
    }
}

    // for login user

    export const login = async(req,res) =>{
        try {
            const {email, password,role} = req.body;
            if(!email ||!password || !role){
                return res.status(400).json({
                    message: "something is missing",
                     success: false});
            }
            
            const user = await User.findOne({email});
            if(!user){
                return res.status(404).json({
                    message: "Incorrect email or password",
                     success: false});
            }


            const isPassword = await bcrypt.compare(password, user.password);
            if(!isPassword){
                return res.status(404).json({
                    message: "Incorrect email or password",
                     success: false});
            }


            //check role is correct or not

            if(role != user.role){
                return res.status(403).json({
                    message: "account does not exist with current role" ,
                     success: false});
            }

            const tokenData = {
                userId : User._id,
            }
            const token = jwt.sign(tokenData, process.env.SECRET_KEY, {expiresIn: '1d'});


            user = {
                _is : user.id ,
                fullname : user.fullname,
                email : user.email,
                phoneNumber : user.phoneNumber,
                role : user.role,
                profile : user.profile,
            }

            return res.status(200).cookie("token", token,{maxAge: 1*21*60*60*1000,httpsOnly : true, sameSite:'strict'}).json({
                message: "Logged in successfully",
                success: true,
            
            });





    }catch(error){
        console.log(error);
     
    }

}


//for logout

export const logout = async(req,res) =>{
    try {
        res.clearCookie("token",{path:'/'});
        return res.status(200).cookie("token","",{maxAge:0}).json({
            message: "Logged out successfully",
            success: true,
        })
    }catch(error){
        console.log(error);
    }
 }


 // for update user's profile

 export const update = async(req,res) =>{
    try {
        const {fullname,email,phoneNumber,bio,skills} = req.body;
        if(!fullname || !email || !phoneNumber || !bio || !skills){
            return res.status(400).json({
                message: "something is missing",
                 success: false});
        } 
        const skillsArray = skills.split(','); 
        const userId = req.id;
        let user = await User.findById(UserId); 
        if(!user){
            return res.status(400).json({
                message: "user not found",
                 success: false});   
        }

        //updating data

        user.fullname = fullname;
        user.email = email;
        user.phoneNumber = phoneNumber;
        user.bio = bio;
        user.skills = skillsArray;

        //resume


        await user.save();
        user = {
            _is : user.id ,
            fullname : user.fullname,
            email : user.email,
            phoneNumber : user.phoneNumber,
            role : user.role,
            profile : user.profile,
        }

        return res.status(200).json({
            message: "User profile updated successfully",
            success: true,
            user
        })


    } catch (error) {
     console.log(error);
        
    }
 }
