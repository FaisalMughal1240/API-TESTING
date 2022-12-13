const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('./api/helper/db-connect');
const port = 2000;
const authRoutes = require('./api/routes/auth.route');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var db = mongoose()
app.get('/',(req,res)=>{
    return res.status(200).json({
        message:'I am working'
    })
});
app.use('/api',authRoutes);
app.listen(port,()=>{
    console.log('working------')
})