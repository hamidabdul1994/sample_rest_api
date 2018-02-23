var express = require('express');
var router = express.Router();
var upload = require('express-fileupload')
var profileController = require("../controllers").pictureController;

/* GET */
router.get('/', function(req, res, next) {
  res.send({ title: 'Express' });
});
router.post("/uploadPicture",upload(),profileController.uploadPicture);
module.exports = router;
