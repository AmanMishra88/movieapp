var express = require('express');
var artistRouter = express.Router();

artistRouter.route('/')
    .get(function(req,res){
       // res.send('This is artist page');
       res.render('artists', {title: 'Artist Page'});
    })
artistRouter.route('/details')
    .get(function(req,res){
        res.send('This is artist detail page');
    })

module.exports = artistRouter;