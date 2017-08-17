

var express = require('express');
var consign = require('consign');
var app = express();

//Engine de view mudou, agora será ejs
app.set('view engine', 'ejs');

app.set('views', './app/views');

consign().include('app/routes').into(app);
consign().include('app/routes').then('config/dbConnection.js').into(app);

module.exports = app;
