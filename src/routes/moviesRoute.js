var express = require('express');
var moviesRouter = express.Router();

moviesRouter.route('/')
    .get(function(req,res){
       // res.send('This is movies page');
       res.render('movies');
    })
moviesRouter.route('/details')
    .get(function(req,res){
        res.send('This is movies details page');
    })

module.exports = moviesRouter;