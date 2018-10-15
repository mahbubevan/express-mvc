 const mysql = require('mysql');
 const connection = mysql.createConnection({
   host:"127.0.0.1",
   user:"root",
   password:"",
   database:"group8travelagencymanagementsystem",
   //port:3306,
 });


connection.connect(function(err){
  if(err){
    console.log(err.stack);
  }else{
    console.log("Successfully Connected To DB");
  }
});


module.exports = {
  getResult:function(sql,callback){
    connection.query(sql,function(error,result){
      if(error){
        console.log(error.stack);
        callback([]);
      }else{
        callback(result);
      }
    });
  }
};
