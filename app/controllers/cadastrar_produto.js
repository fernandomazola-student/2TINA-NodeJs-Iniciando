module.exports.form_add_produto = function(app, req, res){
    res.render('admin/form_add_produto', {validacao: {}, produto: {} });
}

module.exports.add_produto = function(app, req, res){
  var produto = req.body;
  //res.send('Chegou na Página!!!');

  req.assert('nome', 'Nome é obrigatório').notEmpty();
  req.assert('descricao', 'Descrição é obrigatória').notEmpty();

      var erros = req.validationErrors();

    console.log(erros);

    if(erros){
      res.render('admin/form_add_produto', {validacao : erros, produto : produto});
      return;
    }

  var connection = app.config.dbConnection();
  var produtosModel = new app.app.models.ProdutosDAO(connection);

    produtosModel.salvarProduto(produto, function(error, result){
          //res.render('produtos/produtos', {produtos: result });
          res.redirect('/produtos');
    });
}
