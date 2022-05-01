const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({

    tittle:{type:String,required:true},
    body:{type:String,required:true},
    date:{type:Date,default: Date.now},
    commets:[
        {
            body:String,
            data:Date
        }
    ],
    hidden:Boolean,
    meta:{
        votes:Number,
        favs:Number
    }

})

PostSchema.index({tittle:"text"});

const Post = mongoose.model("Post",PostSchema);

module.exports = Post;