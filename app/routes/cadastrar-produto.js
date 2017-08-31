module.exports = function(app){

app.get('/cadastrar-produto', function(req, res){
  res.render('admin/form_add_produto');
});

app.post('/produtos/salvar', function(req, res){
  var produto = req.body;
  //res.send('Chegou na Página!!!');

  var connection = app.config.dbConnection();
  var produtosModel = new app.app.models.ProdutosDAO(connection);

    produtosModel.salvarProduto(produto, function(error, result){
          //res.render('produtos/produtos', {produtos: result });
          res.redirect('/produtos');
    });

});

//Conexão

//Model

//Função

}
