var express = require('express');
var router = express.Router();
var upload = require('express-fileupload')
var profileController = require("../controllers").pictureController;
var userController = require("../controllers").usersController;

/* POST */
router.post('/addEmployee' , userController.addEmployeeValidator , userController.addEmployee);
router.delete("/deleteEmployee" , userController.commonValidator , userController.deleteEmployee);
router.get("/readEmployee" , userController.commonValidator , userController.readEmployee);
router.put("/updateEmployee" , userController.commonValidator , userController.updateEmployee);
router.get("/readAllEmployee" , userController.readAllEmployee);

router.post("/uploadPicture",upload(),profileController.uploadPicture);

module.exports = router;
