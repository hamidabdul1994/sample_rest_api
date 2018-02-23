var express = require('express');
var router = express.Router();
var upload = require('express-fileupload')
var profileController = require("../controllers").pictureController;
var userController = require("../controllers").usersController;

/* POST */
router.post('/addEmployee', userController.addEmployee);
router.delete("/deleteEmployee",userController.deleteEmployee);
router.get("/readEmployee",userController.readEmployee);
router.get("/readAllEmployee",userController.readAllEmployee);
router.put("/updateEmployee",userController.updateEmployee);

router.post("/uploadPicture",upload(),profileController.uploadPicture);

module.exports = router;
