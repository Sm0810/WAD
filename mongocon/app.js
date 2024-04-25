const express = require('express')
const mongoose =require('mongoose')
const router = require('./controllers/controller')
const url='mongodb+srv://kbtug21327:sam@cluster0.jgmc3sn.mongodb.net/mydb'

const app = express()
mongoose.connect(url)

app.use('/',router)

app.listen(3039,()=>{
    console.log("server connected successfully");
})