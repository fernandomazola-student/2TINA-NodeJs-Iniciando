// var dbConnection = require('../../config/dbConnection');

module.exports = function(app){
  app.get('/produto', function(req, res){
    var connection = app.config.dbConnection();
    connection.query(
      'SELECT * FROM produtos WHERE id_produto = 1',
      function(error, result){
        res.render("produtos/produto", {produto:result});
      }
    );
    //
    // res.send("<html><body>Página Inicial</body></html>");
  });
}
