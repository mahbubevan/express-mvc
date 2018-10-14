const express = require('express');
const router = express.Router();


const requestHandler = function(req,res){
  //res.send("Hello From Home");
  res.render("home/index",{name:req.session.un});
}

var data = {
            name:"Thor",
            type: "God Of Thunder",
            obj:{
              villain:"hella",

            }
}
router.get('/',requestHandler);



module.exports = router;
