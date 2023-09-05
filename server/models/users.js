const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    age:Number,
    gender:String,
    date:Date,
    mobile:Number

});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;