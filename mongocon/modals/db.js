const mongoose = require('mongoose')

const dbSchema=new mongoose.Schema({
    name:{type:String},
    addr:{type:String}
})

module.exports = mongoose.model('db',dbSchema)