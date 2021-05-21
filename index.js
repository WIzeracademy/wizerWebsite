 const express = require('express');

 const app = express();

 app.get("/",(req,res)=>{
     res.send({"Hii":"What are you looking at M*@%#*f**k*r "});
 });

const PORT = process.env.PORT || 5000;
 app.listen(PORT);