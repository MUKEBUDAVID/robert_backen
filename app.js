 const express = require('express');
const { cards1,cards2,cards3 } = require('./data');
const app = express();

app.use(express.json());



app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});


app.get("/api/stuff/:id",(req,res)=>{
   
 if(req.params.id==undefined){
  res.json(cards1).status(200);
 }

 if(req.params.id==="Maitenannces"){
  res.json(cards2).status(200);
}

if(req.params.id==="Installationetconfiguration"){
  res.json(cards3).status(200);
}
 

if(req.params.id==="Webmsater"){
  res.json(cards1).status(200);
}

if(req.params.id==="consultation"){
  res.json(cards2).status(200);
}

if(req.params.id==="soustraitances"){
  res.json(cards3).status(200);
}


if(req.params.id==="Basededonnne"){
  res.json(cards1).status(200);
}






 
    
})

























module.exports=app;