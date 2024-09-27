import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import userRoute from './routes/user.rout.js'
import companyroute from "./routes/company.routes.js";
dotenv.config({});

const app = express();

app.get("/home",(req,res)=>{
    return res.status(200).json({
        message:"i am comming from backend",
        success:true
    });
})



app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(cookieParser());
const corsOptions ={
    origina: 'http/localhost:5173',
    credentials : true
} 
app.use(cors(corsOptions));
 
const PORT = process.env.PORT || 3000;


//api's

app.use("/api/v1/user",userRoute);
app.use("/api/v1/company",companyRoutes);

 
app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is running on port ${PORT}`);
}) 