CREATE DATABASE sistema_produtos;
USE sistema_produtos;
CREATE TABLE produtos(
	id_produto INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL,
    descricao VARCHAR(200)
);

INSERT INTO produtos(`nome`,`descricao`)VALUES('cebola', 'cebola rosa');

CREATE TABLE clientes(
	id_cliente INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL,
    sobrenome VARCHAR(45) NOT NULL,
    cep VARCHAR(9) NOT NULL,
    endereco varchar(150) NOT NULL,
    cpf VARCHAR(14) NOT NULL
);

INSERT INTO clientes(`nome`,`sobrenome`, `cep`,`endereco`, `cpf`)VALUES('Fernando', 'Mazola', '02617-060', 'Rua Zely', '379-032-808-13');