


const mongoose = require("mongoose");

//definimos una instancia de la clase de mongoose     PARA CREAR ESQUEMAS " SCHEMAS ";

const Schema = mongoose.Schema;

const userSchema= new Schema({
    fullname:{type:String,required:true},
    username:{type:String,required:true,unique:true},      //NUESTRA ESTRUCTURA DE COLLECTION lo hacemos con la Clase Schema
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
},{
    timestamps:true,   //created at updated at //  para eliminar __v : versionKey:false

});

userSchema.set("toJSON",{
    transform(doc,ret){
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
    } 
})

const User = mongoose.model("User",userSchema);

module.exports = User;






