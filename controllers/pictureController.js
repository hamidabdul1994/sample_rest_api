
var upload = require('express-fileupload');
var profileService = require("../services").pictureService;
var commonService = require("../services").commonService;

module.exports = {
    "uploadPicture":(req,res,next)=>{
        var responseObj = commonService.response;
            if (req.files) {
            if (profileService.isImage(profileService.convertToHexCode(files.filename.data))) {
                var file = req.files.filename
                filename = file.name
                file.mv(__dirname+'/public/upload/'+filename,(err) => {
                if (err) {
                    return next(err);
                } else {
                    responseObj.setStatus(true);
                    responseObj.setMessage("Successfully uploaded");
                }
                res.send(responseObj);
                });
            } else {
                return next("it not an image");
            }
        }
    }
};