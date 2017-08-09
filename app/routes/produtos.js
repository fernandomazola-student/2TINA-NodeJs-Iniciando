module.exports = function(app){
  app.get('/produtos', function(req, res){
    res.render("produtos/produtos");
    // res.send("<html><body>Página Inicial</body></html>");
  });
}
