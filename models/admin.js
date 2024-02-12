const mongoose = require('mongoose');
const AdminSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true,
    },

    lastname:{
        type:String,
        required : true,
    },
    email:{
        type:String,
        default:null,
        required : true,
        unique:true,
    },
    

    password:{
        type:String,
        required : true,
    },
    role:{
        type:String,
        enum :['admin','user'],
      
    },


});
module.exports=mongoose.model('admin',AdminSchema);