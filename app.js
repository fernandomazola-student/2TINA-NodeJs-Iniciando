var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.send("<html><body>Página Inicial</body></html>");
});

app.get('/tecnologia', function(req, res){
  res.send("<html><body>Página de Tecnologia</body></html>");
});

app.get('/musica', function(req, res){
  res.send("<html><body>Página de Música</body></html>");
});

app.listen(3000,function(){
  console.log('Servidor ativo e rodando com Express!');
});

//REFATORANDO CODIGO COM EXPRESS
