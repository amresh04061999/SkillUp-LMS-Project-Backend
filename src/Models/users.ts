import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:[true , 'userName is required'],
        unique:true,
        lowecase:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:[true , 'Email is required'],
        unique:true,
        lowecase:true,
        trim:true,
    },
    password:{
        type:String,
        required:[true , 'Password is required'],
        unique:true,
        lowecase:true,
        trim:true,
    },
    avatar :{
        type:String,
        required:[true , 'Avtar is required']
    }
})