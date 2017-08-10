var dbConnection = require('../../config/dbConnection');

module.exports = function(app){
  var connection = dbConnection();
  app.get('/produtos', function(req, res){

    connection.query(
      'SELECT * FROM produtos',
      function(error, result){
        res.render("produtos/produtos", {produtos:result});
      }
    );
    //
    // res.send("<html><body>Página Inicial</body></html>");
  });
}
