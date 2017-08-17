var mysql = require('mysql');


//COLOCAMOS NOSSA FUNÇÃO DE CONEXAO EM UMA VARIAVEL
var conecMySQL = function(){
// var connection = mysql.createConnection({
  return mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'fiap',
  database: 'sistema_produtos'
});
}

module.exports = function(){
  console.log('O AutoLoad carregou o módulo de conexão');
  return conecMySQL;
}
