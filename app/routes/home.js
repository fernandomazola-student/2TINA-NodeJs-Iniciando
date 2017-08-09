module.exports = function(app){
  app.get('/', function(req, res){
    res.render("home/index");
    // res.send("<html><body>Página Inicial</body></html>");
  });

}
