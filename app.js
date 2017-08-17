var app = require('./config/server');
app.listen(3000,function(){
  console.log('server on');
});




//CONFIGURAÇÃO DE FORMA MODULARIZADA

//CONFIGURAÇÃO DAS ROTAS SEM CONSIGN
// var app = require('./config/server');
// var rotaHome = require('./app/routes/home');
// rotaHome(app);
//
// //ROTA DE cadastrar
// var rotaCadastrar = require('./app/routes/cadastrar');
// rotaCadastrar(app);
//
// //ROTA DE produtos
// var rotaProdutos = require('./app/routes/produtos');
// rotaProdutos(app);
//
// //ROTA DE clientes
// var rotaClientes = require('./app/routes/clientes');
// rotaClientes(app);

//CONFIGURAÇÃO DA FORMA ANTIGA
// var express = require('express');
//
// var app = express();
//
// var msg = require('./mod_teste');
// //Engine de view mudou, agora será ejs
// app.set('view engine', 'ejs');


//REFATORANDO CODIGO COM EXPRESS e EJS
// app.get('/esporte', function(req, res){
//   res.render("secao/esporte");
//   // res.send("<html><body>Página Inicial</body></html>");
// });
//
//
//
//
//
// app.get('/deletar', function(req, res){
//   res.render("admin/form_delete_produto");
//   // res.send("<html><body>Página Inicial</body></html>");
// });

//ENVIADO ROTAS PARA APP > ROUTES


//DE FORMA ANTIGA, SEM EJS, aqui estava renderizando o arquivo direto
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
