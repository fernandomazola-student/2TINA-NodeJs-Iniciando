

var express = require('express');
var app = express();

//Engine de view mudou, agora será ejs
app.set('view engine', 'ejs');

app.set('views', './app/views');

module.exports = app;
