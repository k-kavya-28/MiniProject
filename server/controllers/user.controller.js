const User = require("../models/user")
const jwt_key=process.env.JWT_KEY
const jwt=require("jsonwebtoken")
// const bcrypt=require("bcrypt")

const SignUpController=async(req,res)=>{
    try {
        const UserData = req.body;
    
        // Check if the rollNumber already exists
        const existingUser = await User.findOne({ rollNumber:UserData.rollNumber });
        if (existingUser) {
          return res.status(400).json({ message: 'User with this roll number already exists' });
        }
    
        // Create a new user
        const user = new User(UserData);
    
        // Save the user to the database
        await user.save();
    
        // Respond with success
        res.status(201).json({ message: 'Account created successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
}

const SignInController=async(req,res)=>{
    try{
        const Login_Data=req.body
        console.log(Login_Data)
        const Req_Token=req.cookies
        console.log(Req_Token)
        // console.log(Req_token)
        if(Req_Token){
            const user_id=jwt.verify(Req_Token,jwt_key).payload
            const UserDocument=await User.findById(user_id)
            if(!UserDocument) throw new Error("User not found");
                res.cookie("loged",Req_Token)
                console.log("chal reha")
                res.status(200).json({
                    logedin:true,
                    cookie:Req_Token,
                    role:UserDocument.role
                })
        }
        else{
        const UserDocument=await User.findOne({uniqUserName:Login_Data.uniqUserName})
        console.log(UserDocument)
        if(!UserDocument) throw new Error("Signup first")
        if(Login_Data.password!==UserDocument.password) throw new Error("Password is not Valid")
        const token=jwt.sign({payload:UserDocument._id},jwt_key)
        res.cookie("loged",token,{expires:new Date(Date.now()+5654654654)})
        res.status(200).json({
            message:"User Loged In",
            loged:true,
        })
    }
    }
    catch(err){
        res.status(409).json({
            message:err.message,
            loged:false
        })
    }
}
    

module.exports={SignUpController,SignInController}