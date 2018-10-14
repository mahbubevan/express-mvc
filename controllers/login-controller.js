const express = require('express');
const db = require.main.require('./models/db');
const router = express.Router();


router.get('/',function(req,res){
  res.render("login/login");
});

router.post('/',function(req,res){
  var sql = " SELECT * from countires ";

  db.getResult(sql,function(result){
    if(result.length>0){
      req.session.un = req.body.username;
      res.redirect('/home');
    }else{
      res.redirect('/');
    }
  });
  //if(req.body.username == req.body.pwd){
    //req.session.un = req.body.username;
    //res.redirect('/home');
  //}else{
    //res.redirect('/');
  //}
});

module.exports = router;
