var dbConnection = require('../../config/dbConnection');

module.exports = function(app){
  var connection = dbConnection();
  app.get('/clientes', function(req, res){

    connection.query(
      'SELECT * FROM clientes',
      function(error, result){
        res.render("clientes/clientes", {clientes:result});
      }
    );

  });
}
