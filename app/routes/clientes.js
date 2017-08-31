module.exports = function(app){

  app.get('/clientes', function(req, res){

      var connection = app.config.dbConnection();
      var clientesModel = new app.app.models.ClientesDAO(connection);

        clientesModel.getClientes(function(error, result){
          res.render('clientes/clientes', {clientes: result});
    });
  });
}
