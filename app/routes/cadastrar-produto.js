module.exports = function(app){

app.get('/cadastrar-produto', function(req, res){
  app.app.controllers.cadastrar-produto.form_add_produto(app, req, res);
});

app.post('/produtos/salvar', function(req, res){
  app.app.controllers.cadastrar-produto.add_produto(app, req, res);
});

}
