module.exports = function (){
  this.getProdutos = function(connection, callback){
    connection.query('SELECT * FROM produtos', callback);
  }

  this.getProduto = function(connection,callback){
    connection.query('SELECT * FROM produtos WHERE id_produto = 1', callback);
  }
  return this;
}
