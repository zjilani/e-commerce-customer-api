const mongoose = require("mongoose")
const validator =  require('validator')
const jwt = require('jsonwebtoken');
require('../app.js')

const customerSchema = new mongoose.Schema({
    customerId:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    mobileNo:{
        type:Number,
        min : 1000000000,
        max : 9999999999,
        required:true,
        unique: true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email  Not Valid")
            }
        }
    },
    password:{
        type:String,
        required: true,
        trim:true,
        validate(value){
            if(((value.toLowerCase()).includes('password')) && value.length>6){
                throw new Error("password can't be included in Password field or length is too short")
            }

        }
    },
    otpVerified:{
        type:Boolean,
        default:false
    },
    otp:{
        type:String,
        default: ""
    },
    markForDelete:{
        type:Boolean,
        default:false
    },
    tokens:[{
        token:{
            type:String
            // required: true,
        }
    }]
})


module.exports = mongoose.model("Customer",customerSchema)