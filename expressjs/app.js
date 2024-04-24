const express = require('express') ;
const app = express() ;
const port = 3000 ;

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/home.html') ;
}) ;
 app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/public/login.html') ;
 }) ;

 app.get( '/about',(req,res)=>{
    res.sendFile(__dirname+'/public/about.html') ;
 }) ;

 app.listen(port, function () {
    console.log("Express server listening on port 3000");
    });