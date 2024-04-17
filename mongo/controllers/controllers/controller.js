const express = require('express')
const router = express.Router()
const col = require('../model/model')
const db = require('../modals/db')

router.get('/',async(req,res)=>{
    const data=await db.find()
    res.json(data)
})

router.post('/insert',async(req,res)=>{

    const record = new col({
        name:req.body.name
    })

    await record.save();

})

router.put('/update',async(req,res)=>{

    const record = await col.findOneAndUpdate({name:'Sam'},{location:req.body.location});

    res.json({
        success:'done'
    })



})


router.delete('/delete/:name',async(req,res)=>{
    const record = await col.findOneAndDelete({name:req.params.name})
    
    if(record){
        res.json({success:"done"})
    }

})


module.exports = router;