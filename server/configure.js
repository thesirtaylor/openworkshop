var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    cors = require('cors'),
    methodOverride = require('method-override'),
    //multer = require('multer')
    route = require('./routes'),
    path = require('path');


    module.exports = function(app){
        app.use(morgan('dev'));
        app.use(cors());
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended:true}));
        //app.use(multer());
        app.use(methodOverride());
        app.use(allowCrossDomain());


        app.use('/public', express.static(path.join(__dirname,'../public')))
        route(app);
        return app;
    }
var allowCrossDomain = function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type')

    next();
}