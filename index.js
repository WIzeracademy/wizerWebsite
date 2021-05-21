 const express = require('express');

 const app = express();

 app.get("/",(req,res)=>{
     res.send({"Hii":"There I m the new One Bro"});
 });

const PORT = process.env.PORT || 5000;
 app.listen(PORT);