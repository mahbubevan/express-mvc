//declaration
const express = require('express');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const homeController = require('./controllers/home');
const app = express();
const loginController = require('./controllers/login-controller');

const port = 3000;

//var file = 'index.html';
//var html = fs.readFileSync(file).toString();


//configuration
app.set('view engine','ejs');


//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(expressSession({secret:"secret",saveUninitialized:true,resave:false}));

//Routes
app.use('/home',homeController);
app.use('/',loginController);

//server-startup
app.listen(port,()=>console.log("Node server up and running on port: "+port));
