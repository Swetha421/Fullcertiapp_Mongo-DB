const {Schema}=require('mongoose')
const {model}=require('mongoose')
const { type } = require('os')
const demo=new Schema({
    certiid:{ type:String,required:true},
    name: {   type:String,required:true},
    course:{ type:String,required:true},
    grade:{ type :String,required:true},
    date:{ type :String,required:true}

});
const certidetails=model('certidetail',demo)
module.exports=certidetails;
