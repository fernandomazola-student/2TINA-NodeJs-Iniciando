var express = require('express');

var app = express();

var msg = require('./mod_teste');
//Engine de view mudou, agora será ejs
app.set('view engine', 'ejs');

app.get('/esporte', function(req, res){
  res.render("secao/esporte");
  // res.send("<html><body>Página Inicial</body></html>");
});

app.get('/', function(req, res){
  res.render("home/index");
  // res.send("<html><body>Página Inicial</body></html>");
});

app.get('/cadastrar', function(req, res){
  res.render("admin/form_add_produto");
  // res.send("<html><body>Página Inicial</body></html>");
});

app.get('/deletar', function(req, res){
  res.render("admin/form_delete_produto");
  // res.send("<html><body>Página Inicial</body></html>");
});

app.get('/produtos', function(req, res){
  res.render("produtos/produtos");
  // res.send("<html><body>Página Inicial</body></html>");
});

// app.get('/tecnologia', function(req, res){
//   res.send("<html><body>Página de Tecnologia</body></html>");
// });
//
// app.get('/musica', function(req, res){
//   res.send("<html><body>Página de Música</body></html>");
// });
//
// app.get('/tabuada', function(req,res){
//   var mensagem = '<center><h2>TABUADAS</h2>';
//   for(a = 1; a < 11; a++){
//     mensagem += '<hr> Tabuada do ' + a + '<br>';
//     for(b = 0; b < 11; b++){
//       var resultado = a + ' x ' + b + '=' + (a * b) + '<br>';
//       mensagem += resultado;
//     }
//   }
//   mensagem += '<hr>';
//   mensagem += '</center>'
//   res.send(mensagem);
// });

app.listen(3000,function(){
  console.log(msg());
});

//REFATORANDO CODIGO COM EXPRESS
