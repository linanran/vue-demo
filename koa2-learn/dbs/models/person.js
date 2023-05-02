const mongoose = require('mongoose')
//schema 表的描述
let personSchema=new mongoose.Schema({
     name:String,
    age:Number
})
//model 表的模型 通过schema生成model
module.exports=mongoose.model('Person',personSchema)