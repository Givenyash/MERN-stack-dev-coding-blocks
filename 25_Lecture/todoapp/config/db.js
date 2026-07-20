const mongoose=require("mongoose");
const connect=async()=>{
    try{
        await mongoose.connect(process.env.mongourl)
        console.log("connected successfully...")
    }
    catch(err){
        console.log(err);
    }
}
module.exports=connect;