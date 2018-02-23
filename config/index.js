var envList = ["production","developement","staging"];
var env = process.env.NODE_ENV || "developement"

var config;

if(envList.indexOf(env) == -1){
    env = "developement";
}
config = require("./"+env);

module.exports = config;