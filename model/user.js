'use strict';
var mongoose = require('mongoose'),
    extend = require('mongoose-schema-extend');
var BaseModel = require("./base");


const UserSchema =BaseModel.extend({ 
        firstName: String, 
        lastName: String, 
        emailAddress : {
            required:true,
            unique:true
        },
        phoneNumber:{
            required:true,
            unique:true    
        }
    });
    
var UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel; 