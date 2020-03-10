var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/myshops');
mongoose.connect('mongodb://localhost:27017/myshops', { useNewUrlParser: true, useUnifiedTopology: true });

var api = require('./server/api');
var app = express();

//app.use(express.static(path.join(__dirname, 'dist/usingangular/')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/usingangular/')));

app.use('/api', api);

//app.use('*', function (req, res) {
  //res.sendFile(path.join(__dirname, 'index.html'));  //D:\Projects\usingangular\dist\usingangular\index.html
//})

  var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log('Server is running...%s', port);
  })
