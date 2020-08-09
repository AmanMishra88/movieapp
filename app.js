var express = require('express');
var app = express(); //creating object for express
var port = 7800 || env.process.PORT;
var moviesRouter = express.Router();
var artistRouter = express.Router();

//route

app.get('/', function(req, res){       //get,put etc
    res.send('My First App');
})
moviesRouter.route('/')
    .get(function(req,res){
        res.send('This is movies page');
    })
moviesRouter.route('/details')
    .get(function(req,res){
        res.send('This is movies details page');
    })
artistRouter.route('/')
    .get(function(req,res){
        res.send('This is artist page');
    })
artistRouter.route('/details')
    .get(function(req,res){
        res.send('This is artist detail page');
    })

app.use('/movies', moviesRouter);
app.use('/artist', artistRouter);

app.listen(port, function(err){
    if(err) throw err;
    console.log("Server is running on port :" + port);
})