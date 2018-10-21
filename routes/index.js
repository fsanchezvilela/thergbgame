// Initialize npm boys 
var express     = require("express");
var router      = express.Router();


    router.get("/",function(req, res){
        res.render("index"); 
    });
    
//-----------------EXPORT ROUTER------------------------
    module.exports = router;