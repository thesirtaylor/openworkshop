mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:/test')
    .catch(error => console.log(error));
mongoose.connection.on('open', ()=>{
    console.log('Mongoose Connected');
});

var express = require('express'),
    app = express(),
    configure = require('./server/configure.js'),
    mongoose = require('mongoose');

    app.set('port', process.env.PORT||3001)
    app.set('views', __dirname+'/views')
    app = configure(app);

