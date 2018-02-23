var mongoose = require("mongoose");
module.exports = {
    init : init,
    userModel : require("./user"),
    profileModel : require("./profile")
}
var config = require("../config");
function init(){
    return mongoose.connect(config.mongoUrl,{});
}