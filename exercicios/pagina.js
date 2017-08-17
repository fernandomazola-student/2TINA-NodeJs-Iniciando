var http = require('http');

var server = http.createServer(function(req, res){
  var categoria = req.url;
  if(categoria == "/tecnologia"){
    res.end("<html><body>Categoria de Tecnologia</body></html>");
  }else if(categoria == "/lol"){
    res.end("<html><body>Categoria League of Legends</body></html>");
  }else if(categoria == "/pop"){
    res.end("<html><body>Cantores POP</body></html>");
  }
  res.end("<html><body>PÁGINA INICIAL</body></html>");
});

server.listen(3000);
//INSTALANDO NPM e REFATORANDO O CODIGO COM EXPRESS
