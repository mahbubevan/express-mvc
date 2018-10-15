//declaration
const express = require('express');
const app = express();
const port = 3000;
const ejs = require('ejs');
const homeController = require('./controllers/home/homeController');


//configuration
app.set('view engine','ejs');

//Middlewars
app.use('/assets',express.static('assets'));

//Routes
app.use('/home',homeController);


//server startup


app.listen(port,()=> console.log("Server Running on: "+port));
