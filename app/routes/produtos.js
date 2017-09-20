module.exports = function(app){

app.get('/produtos', function(req, res){

var connection = app.config.dbConnection();
var produtosModel = new app.app.models.ProdutosDAO(connection);

  produtosModel.getProdutos(function(error, result){
        res.render('produtos/produtos', {produtos: result });
  });
});

app.get('/produto', function(req, res){

var connection = app.config.dbConnection();
var produtosModel = new app.app.models.ProdutosDAO(connection);

produtosModel.getProduto(function(error, result){
  res.render('produtos/produto', {produto: result });
});

});

}
