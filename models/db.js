const mysql = require('mysql');

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"countryDB",
    port:80,
});


connection.connect(function(err){
  if(err){
    console.log(err.stack);
  }else{
    console.log("successfully connected");
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
