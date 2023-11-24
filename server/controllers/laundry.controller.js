const LaundaryModel = require("../models/laundry.model")
const User = require("../models/user")

const CreateLaundry=async(req,res)=>{
    try{
        const LaundaryData=req.body
        const UserDoc=await User.find({customerID:LaundaryData.customerID})
        if(!UserDoc) throw new Error("Customer ID not Valid")
        const localDate=new Date().toLocaleDateString()
        // const existingLaunday=await LaundaryModel.findOne({customerID:LaundaryData.customerID,givenDate:localDate})
        // console.log(existingLaunday)
        // console.log(new Date().toLocaleDateString())
        //  if(existingLaunday) throw new Error("User Has already given Laundary for today")
         
        const laundaryDoc=await LaundaryModel.create({...LaundaryData,giveDate:localDate})
        if(!laundaryDoc) throw new Error("Failed to create launday")
        res.json({
           message:"laundary Created",
           created:true
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
        const LaudnaryData=req.body
        console.log(LaudnaryData)
        const LaundaryDocs=await User.find({customerID:LaudnaryData.customerID,status:LaudnaryData.status})
        console.log(LaundaryDocs)
        if(!LaundaryDocs) throw new Error("Failed to Fetch Laundary Data")
        res.json({
            message:"User data fetched",
            fetched:true,
            LaundaryData:LaundaryDocs
        })
    }catch(err){
        res.json({
            message:err.message,
            fetched:false
        })
    }
}

const DeliverLaundry=async(req,res)=>{
    try{
        const laundaryID=req.params.id
        const UpdateLaundary=await LaundaryModel.findByIdAndUpdate()


    }catch(err){
        res.json({
            message:err.message,
            fetched:false
        })
    }
}


module.exports={CreateLaundry,FetchNotDeliveredLaundry,DeliverLaundry}