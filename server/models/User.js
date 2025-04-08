const mongoose=require("mongoose");

const newSchema=new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    password: {type: String, required: true},
    confirmpassword: {type: String, required: true},
    role: {type: String, required: true},
    createAt: {type: Date, default: Date.now}
});

const User=mongoose.model('User', newSchema);
module.exports=User;