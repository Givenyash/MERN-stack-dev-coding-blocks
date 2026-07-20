const express=require("express");
const todos=require('../model/todo.js')
const router=express.Router();
router.get('/',async(req,res)=>{
    const data=await todos.find();
    res.json(data);
})
router.post('/',async(req,res)=>{
    await todos.create({
        title:req.body.title
    })
    res.json(todos);
})
router.put("/:id",async (req,res)=>{
    console.log(req.params.id);
    const data=await todos.findByIdAndUpdate(
        
        req.params.id,
        req.body,
        {new:true}
    )
    res.json(todos);
})

router.delete("/:id", async(req,res)=>{
    await todos.findByIdAndDelete(req.params.id);
    res.json(todos);
})
module.exports=router;