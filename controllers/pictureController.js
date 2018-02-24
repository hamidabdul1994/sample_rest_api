/**
 * @author Hamid Raza Noori
 * @description To handle piture related request
 */
var upload = require('express-fileupload');
var config = require("../config");
var profileService = require("../services").pictureService;
var userService = require("../services").userService;
var commonService = require("../services").commonService;

module.exports = {
    "readPicture" : (req,res,next)=>{
        profileService.readPicture(req.query.emailAddress,(err,profileList)=>{
            if(err)
                return next(err);
            
            var responseObj = commonService.response;
            responseObj.setStatus(true);
            responseObj.setMessage("Successfully read Profile list");
            responseObj.setData(profileList);
        });
    },
    "uploadPicture" : (req,res,next)=>{
        var responseObj = commonService.response;
            if (req.files) {
            if (profileService.isImage(profileService.convertToHexCode(req.files.filename.data))) {
                var file = req.files.filename
                filename = file.name
                file.mv(__dirname + config.imageLocation + filename , (err) => {
                if (err) {
                    return next(err);
                } else {
                    responseObj.setStatus(true);
                    responseObj.setMessage("Successfully uploaded");
                }
                res.send(responseObj);
                });
            } else {
                return next("You needs to upload image!");
            }
        }
    }
};