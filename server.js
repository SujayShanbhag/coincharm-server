const express= require('express');
const bodyParser=require('body-parser');
var app=express()

app.use(express.static(__dirname +'/public'));

app.get("/",function(req,res){
  res.sendFile(__dirname +'/index.html')
});

app.get("/download",function(req,res){
  res.download('app-release.apk');
});

app.listen(process.env.PORT || 3000,function(){
  console.log("server running on port 3000");
});
