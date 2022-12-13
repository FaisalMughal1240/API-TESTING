const jwt = require('jsonwebtoken');
const User = require('./../model/user.model');
exports.login = function (req,res){
    let data = req.body;
    let email = data.email;
    let password = data.password;
    if(email === 'admin@gmail.com' && password === 'admin'){
        var token = jwt.sign({ email: email }, 'shhhhh');
        return res.status(200).json({
            message:'logged in !',
            token
        })
    }else{
        return res.status(401).json({
            message:'check your email or password'
        })
    }
}
exports.user = async function (req,res){
    let email = req.body.email;
    console.log(email);
    let user = await User.findOne({email:email});
    return res.status(200).json({
        user
    })
}

exports.users = async function (req,res){
    console.log('0------0')
    let users = await User.find();
    return res.status(200).json({
        users
    })
}
exports.upload = async function (req,res){
     console.log(req.file)
     let path=req.path+"/"+req.file.filename;
    return res.status(200).json({
        message:'uploaded successfully !',
        path
    })
}


exports.signup = async function (req,res){
    let email=req.body.email;
    let password = req.body.password;
    let name = req.body.name;
    let newUser = new User({
        name,
        email,
        password
    })
    await newUser.save();
    return res.status(200).json({
        message:'User Added'
    })
}