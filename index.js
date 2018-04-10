const express = require('express');
const mongoose = require('mongoose');
const app = express();
var db ='mongodb://localhost/foody';
mongoose.connect(db);
app.get('/',(req,res)=>{
    res.send({hi:'there again'})
});
const PORT = process.env.PORT || 5000;
app.listen(PORT,function(){
    console.log("applistening on port" + PORT)
});
