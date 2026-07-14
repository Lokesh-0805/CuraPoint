import jwt from "jsonwebtoken";

// user authentication middleware for get
const authUserget = async (req,res,next) => {
    try {
        
        const {token} = req.headers
        if(!token){
            return res.json({success:false,message:"Not Authorized Login Again"})
        }
        const token_decode = jwt.verify(token,process.env.JWT_SECRET)
        
        req.body = token_decode.id

        next()


    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

export default authUserget

