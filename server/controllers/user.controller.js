const User = require("../models/user")
const Laundry = require("../models/laundry.model")
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
    try {
        const { userId, password } = req.body;
        const user = await User.findOne({ uniqUserName: userId });
        if (!user) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }
        if(user.password!==password){
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user._id }, jwt_key);
        res.status(200).json({ token: token, message: 'Logged in successfully' });
    } catch (error) {
        res.send({
            message: error.message
        });
    }
}

const fetchData=async(req,res)=>{
    try {
        const {token} = req.body;
        const decoded=jwt.verify(token,jwt_key)
        const user=await User.findById(decoded.id)
        const laundry = await Laundry.find({customerID: user.uniqUserName})
        // console.log(laundry)
        res.status(200).json({
            user: user,
            laundry: laundry,
            message: 'Fetched data successfully'
        })
    } catch (error) {
        console.log(error.message)
        res.send({
            message: error.message
        });
    }
}   

module.exports={SignUpController,SignInController,fetchData}