module.exports.formulario_cliente = function(app, req, res){
  res.render('admin/form_add_cliente', {validacao: {}, cliente: {} });
}

module.exports.add_cliente = function(app, req, res){


  var cliente = req.body;
  req.assert('nome', 'Campo NOME é obrigatório').notEmpty();
  req.assert('sobrenome', 'Campo SOBRENOME é obrigatório').notEmpty();
  req.assert('data_nasc', 'Data de Nascimento é obrigatória').isDate({format: 'YYYY-MM-DD'});
  req.assert('cep', 'Campo CEP é obrigatório').notEmpty();
  req.assert('endereco', 'ENDEREÇO é obrigatório').notEmpty();
  req.assert('endereco', 'Campo ENDEREÇO deve ter no mínimo 10 caracteres e no máximo 200 caracteres').len(10,200);
  req.assert('cpf', 'CPF é obrigatório').notEmpty();
  req.assert('cpf', 'Campo CPF deve ter 11 caracteres').len(11,11);

    var erros = req.validationErrors();

  console.log(erros);

  if(erros){
    res.render('admin/form_add_cliente', {validacao : erros, cliente : cliente});
    return;
  }

  var connection = app.config.dbConnection();
  var clientesModel = new app.app.models.ClientesDAO(connection);

    clientesModel.salvarCliente(cliente, function(error, result){
          res.redirect('/clientes');
    });

}
