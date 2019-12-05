const express = require("express");
const routes = express.Router();
const Users = require('./../../config/Modal/Users')





routes.get("/get", async(req,res)=>{

    const users = await Users.find({})
    
    res.send({users:users})
});


routes.post("/post",(req,res)=>{
    const user = new Users(req.body)
    user.save()
    .then(()=>{
        res.send({message:"user successfully added"})
    })
    .catch((err)=>{
        console.log({message:"user Failed"})
    })
    console.log("Post===>",req.body)
})

module.exports = routes;