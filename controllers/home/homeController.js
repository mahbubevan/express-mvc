const express = require('express');
const router = express.Router();
const db = require.main.require('./models/db');

var sql = "SELECT * from user";
console.log(sql);
var re =
	db.getResult(sql,function(result){
      console.log(result);
	});


router.get('/',function(req,res){
  res.render("homeView/home");
});






module.exports = router;
