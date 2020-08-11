var express = require('express');
var app = express(); //creating object for express
var port = 7800 || env.process.PORT;
var moviesRouter = require('./src/routes/moviesRoute');
var artistRouter = require('./src/routes/artistRoute');

app.use(express.static(__dirname + '/public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');  // embedding template engine

var menu = [
    'HOME', 'MOVIES', 'ARTISTS'
]

app.get('/', function(req, res){       //get,put etc
   // res.send('My First App');
   res.render('index');
})

app.use('/movies', moviesRouter);
app.use('/artist', artistRouter);

app.listen(port, function(err){
    if(err) throw err;
    console.log("Server is running on port :" + port);
})