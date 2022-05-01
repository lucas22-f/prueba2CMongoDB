const res = require("express/lib/response");
const Post = require("./postsModel");

const createPost = async(req,res,next) =>{
    const newPost = new Post({...req.body});
    newPost.save((err,data)=>{
        if(err){
            console.log(err);
        }else{
            res.status(200).send(data);
        }
    })
    
}

const findPostbyText = async(req,res,next)=>{
    const {query} = req.params;
    Post.find({$text: {$search:query}} ,(err,result)=>{
        if(err)return res.send(err)
        if(result) return res.send(result)
    } )
}

module.exports = {createPost,findPostbyText}