require("./db/db");
require("dotenv").config();
const express = require("express");
const port = 3030;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("welcome");
})

app.use("/users",require("./users/userRoutes"));
app.use("/posts",require("./posts/postsRouter"));
app.listen(port,(err)=>{
    err?console.log("no funca"):console.log(`sv corriendo en http://localhost:${port}`);
})

