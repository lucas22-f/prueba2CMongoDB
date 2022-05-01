const res = require("express/lib/response");
const User  = require("./userModel");

const createUser= async(req,res,next) =>{
        const newUser = User({...req.body})
        newUser.save((err)=>{
            if(err) return console.log(err);
            res.sendStatus(200);
        });
}

const getAllUsers = async(req,res,next) =>{
    try {
        const data =  await User.find();
        res.json(data);
    } catch (error) {
        console.log(error);
    }
     
     
}
const getUserById= async (req,res,next) =>{
    try {
        const data = await User.findById(req.params.id);
        res.json(data)
    } catch (error) {
        console.log(error);
    }

}

const updateUser= async(req,res,next) =>{
    try {
        const data = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.send(data);
    } catch (error) {
        console.log(error);
    }

}
const deleteUser= async(req,res,next) =>{
    try {
        const data = await User.findByIdAndDelete(req.params.id);
        res.sendStatus(202);
    } catch (error) {
        console.log(error);
    }
}
const loginUser= async(req,res,next) =>{
    try {
        const passLog=req.body.password
        const data = await User.findOne({email:req.body.email})
        const realpass = data.password;
        if(passLog===realpass){
            res.sendStatus(200)
        }else{
            res.json({message:"Usuario o contraseñña incorrectos"})
        }
        
    } catch (error) {
        console.log(error);
    }
}


module.exports = {getAllUsers,getUserById,createUser,updateUser,deleteUser,loginUser}