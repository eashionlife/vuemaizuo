var mongoose=require("mongoose");

var Schema = mongoose.Schema;

var obj={
    name:String,
    phone:String,
    email:String,
    password:String
}

var model=mongoose.model("user",new Schema(obj));

module.exports=model;