import jwt from 'jsonwebtoken'

const isAuthenticated = async (req, res,next) => {
     const token = req.cookies.token;
     try {
        if(!token){
            return res.status(401).json({
                message : "User is not Authenticated",
                success : false
            })
         }
         const decode = await jwt.verify(token, process.env.SECRET_KEY);
         if(!decode){
            return res.status(401).json({
                message : "Token is invalid",
                success : false
            })
         };

         req.id = decode.userId;
         next();

     } catch (error) {
        console.log(error);
        
     }

}
export const isAuthenticated