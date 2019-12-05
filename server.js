const express = require("express");
const app = express();






const mongoose = require('./config/db')

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log("another server conected now")
});







app.listen(3002,()=>{
    console.log("server is working Now")

});
// module.exports=app;
app.use(express.json());
app.use('/',require('./routes'))