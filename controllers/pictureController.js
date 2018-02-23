
var upload = require('express-fileupload');
var profileService = require("../services").pictureService;
var commonService = require("../services").commonService;

module.exports = {
    "uploadPicture":(req,res,next)=>{
        var responseObj = commonService.response;
            if (req.files) {
            if (req.files.filename.data.toString('hex',0,4) ==  '89504e47' || req.files.filename.data.toString('hex',0,4) == 'ffd8ffe0' || req.files.filename.data.toString('hex',0,4) == '47494638' ) {
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