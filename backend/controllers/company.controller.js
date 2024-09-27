import{Company} from "../models/company.model.js";


export const registerCompany = async(req.res) => {
   try{
        const{companyName} = req.body;
         if(!companyName){
           return res.status(400).json({
        message:"Company name is required.",
        success:false
    });

    }
    let company =await Company.findOne({name:companyName});
    if(company){
        return res.status(400).json({
            message:"you cant register same company.",
            success:false
        })
    };
    company= await Company.create({
        name:companyName,
        userId: Request.id
    });
    return res.status(201).json({
        message:"company registered successfully.",
        company,
        success:true
    })

 }  catch(error){
    console.log(error);
 }
}
export  const getCompany= async(req,res)=> {
    try{
        const userId=req.id; //loged in user id
        const comapnies= await company.find({user Id});
        if(!companies){
            return res.status(404).json({
                message:"companies not found.",
                success:false
            })
        }
        return res.status(200).json({
            companies,
            success : true
        })
    } catch (error){
        console.log(error);
    }
}
export const getCompanyById=async (req,res)=>{
    try {
        const companyId=req.parans.id;
        const company= await company.findById(companyId);
        if(!company){
            return res.status(404).json({
                message:"Company not found.",
                success:false
            })
        }
        return res.status(200).json({
            company,
            success: true
        })
        
    } catch (error) {
        console.log(error);
        
    }
}
export const updatecompany= async(req, res)=>{
    try{
        const{ name,description,website,location } = req.body;
        const file=req.file;
        // idhar  cloudnary  aayega
        
        const updatedata={ name,description,website,location };
        const company=await Company.findByIdAndUpdate(req.parans.id, updatedata, {new:true});
        if(!company){
            return res.status(400).json({
                message: "comapny not found.",
                success: false
            })
        }

        return res.status(200).json({
            message: "comapny information  update.",
            success: true
            
        })
    }catch(error){
        console.log(error);
    }

}
