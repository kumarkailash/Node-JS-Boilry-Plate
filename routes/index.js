const express = require("express")
const routes = express.Router()


// routes.use('/post',()=>{
// res.send({message:"hello world"})
// })

routes.use('/post', require('./Post/Post'));



module.exports = routes


