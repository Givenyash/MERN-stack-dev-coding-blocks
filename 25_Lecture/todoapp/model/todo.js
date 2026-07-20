const mongoose=require("mongoose");
const todosschema=new mongoose.Schema({
    title:{
        type:String,
        required:true   
    },
    task:{
        type:Boolean,
        default:false
    }
});
const todos=mongoose.model("todos",todosschema);
module.exports=todos;