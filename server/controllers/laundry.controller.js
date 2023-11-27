const LaundaryModel = require("../models/laundry.model")
const User = require("../models/user")
const jwt = require("jsonwebtoken")
const jwt_key=process.env.JWT_KEY

const CreateLaundry=async(req,res)=>{
    try{
        console.log("Inside CreateLaundry")
        const LaundaryData=req.body
        console.log(LaundaryData)
        const UserDoc=await User.findOne({uniqUserName:LaundaryData.customerID})
        console.log(UserDoc)
        if(!UserDoc) {
            console.log("User not found")
            res.json({
                message:"User not found",
                created:false
            })
            return;
        }
        const existingLaundry=await LaundaryModel.find({customerID:LaundaryData.customerID, giveDate:LaundaryData.giveDate})
        console.log(existingLaundry)
        
        if(existingLaundry.length>0) {
            console.log("Laundry already exists")
            res.json({
                message:"Laundry already submitted today",
                created:false
            })
            return;
        }

        const laundaryDoc=await LaundaryModel.create({...LaundaryData,giveDate:LaundaryData.giveDate,customerID:LaundaryData.customerID})
        if(!laundaryDoc) throw new Error("Failed to create launday")
        res.json({
           message:"laundry created successfully",
           created:true,
           laundry: laundaryDoc
        })
    }catch(err){
        console.log(err.message)
        res.json({
            message:err.message,
            created:false
        })
    }
}

const FetchNotDeliveredLaundry=async(req,res)=>{
    try{
        const token = req.query.cookieVal;
        console.log(token)
        if(!token){
            res.status(401).send({message:"Unauthorized"})
        }
        const decoded=jwt.verify(token,jwt_key)
        console.log(decoded)
        const user=await User.findById(decoded.id)
        console.log(user)
        const laundry = await LaundaryModel.find({customerID: user.uniqUserName, status: "notpicked"})
        console.log(laundry)
        res.status(200).json({
            user: user,
            laundry: laundry,
            message: 'Fetched data successfully'
        });
    }catch(err){
        res.json({
            message:err.message,
            fetched:false
        })
    }
}

const FetchDeliveredLaundry=async(req,res)=>{
    try{
        const token = req.query.cookieVal;
        console.log(token)
        if(!token){
            res.status(401).send({message:"Unauthorized"})
        }
        const decoded=jwt.verify(token,jwt_key)
        // console.log(decoded)
        const user=await User.findById(decoded.id)
        // console.log(user)
        const laundry = await LaundaryModel.find({customerID: user.uniqUserName, status: "picked"})
        console.log(laundry)
        res.status(200).json({
            user: user,
            laundry: laundry,
            message: 'Fetched data successfully'
        });
    }catch(err){
        res.json({
            message:err.message,
            fetched:false
        })
    }
}

const validateAndFetchND= async(req,res)=>{
    try{
        const studId = req.params.studId;
        console.log(`studId: ${studId}`)
        // const studId = req.body.studId;
        const laundry = await LaundaryModel.find({customerID: studId, status: "notpicked"})
        console.log(laundry)
        res.status(200).json({
            laundry: laundry,
            message: 'Fetched data successfully'
        });
    }catch(err){
        res.json({
            message:err.message,
            fetched:false
        })
    }
}

const DeleteLaundry = async(req,res)=> {
    try{
        const laundryId = req.params.laundryId;
        console.log(`laundryId: ${laundryId}`)
        const laundry = await LaundaryModel.findById(laundryId);
        laundry.status = "picked";
        await laundry.save();
        console.log(laundry)
        res.status(200).json({
            message: 'Updated data successfully'
        });
    }catch(error){
        res.json({
            message:error.message,
            deleted:false
        })
    }
}

const fetchLaundry = async(req,res) => {
    try {
        const laundryId = req.params.laundryId;
        console.log(`laundryId: ${laundryId}`)
        const laundry = await LaundaryModel.findById(laundryId);
        console.log(laundry)
        res.status(200).json({
            laundry: laundry,
            message: 'Fetched data successfully'
        });
    } catch (error) {
        console.log(error);
    }
} 

module.exports={
    CreateLaundry,
    FetchNotDeliveredLaundry,
    FetchDeliveredLaundry,
    validateAndFetchND,
    DeleteLaundry,
    fetchLaundry
}