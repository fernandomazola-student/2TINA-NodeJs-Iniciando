// var dbConnection = require('../../config/dbConnection');

module.exports = function(app){
  app.get('/clientes', function(req, res){
    var connection = app.config.dbConnection();
    connection.query(
      'SELECT * FROM clientes',
      function(error, result){
        res.render("clientes/clientes", {clientes:result});
      }
    );

  });
}
