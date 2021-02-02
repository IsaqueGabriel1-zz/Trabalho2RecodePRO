

CREATE TABLE `produtos` (
  `idproduto` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` varchar(100) DEFAULT NULL,
  `descricao` varchar(500) DEFAULT NULL,
  `preco` float DEFAULT NULL,
  `preco_venda` float DEFAULT NULL,
  `imagem` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`idproduto`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

INSERT INTO	produtos (categoria, imagem, descricao, preco, preco_venda) 
values ('geladeira', 
	'Geladeira.jpg',
	'Geladeira Frot Free Brastemp 540 litros',
	'6389.00',
	'5019.00'
    );
INSERT INTO	produtos (categoria, descricao, preco, preco_venda, imagem) 
values(
   'Geladeira',
   'geladeira2.webp',
   'Geladeira Top Freezer 402L',
   '4200',
   '2000'
);
INSERT INTO	produtos (categoria, descricao, preco, preco_venda, imagem) 
values(
   'Geladeira',
   'geladeira3.png',
   'Geladeira comum 540 litros',
   '5250',
   '3500'
);
INSERT INTO	produtos (categoria, descricao, preco, preco_venda, imagem) 
values(
   'Fogao',
   'fogao.jpg',
   'Fogão 6 Bocas de Piso Esmaltec Caribe',
   '1000',
   '500'
);
INSERT INTO	produtos (categoria, descricao, preco, preco_venda, imagem) 
values(
   'Fogao',
   'fog%C3%A3o2.webp',
   'Fogão comum de 6 bocas',
   '700',
   '300'
);
INSERT INTO	produtos (categoria, descricao, preco, preco_venda, imagem) 
values(
   'Microondas',
   'micro1.webp',
   'Microondas seminovo',
   '800',
   '600'
);
INSERT INTO	produtos (categoria, descricao, preco, preco_venda, imagem) 
values(
   'Microondas',
   'micro2.jfif',
   'Micro-ondas usado sem receitas',
   '500',
   '250'
);
INSERT INTO	produtos (categoria, descricao, preco, preco_venda, imagem) 
values(
   'Microondas',
   'micro3.webp',
   'Micro-ondas moderno ',
   '2000',
   '1500'
);
INSERT INTO	produtos (categoria, descricao, preco, preco_venda, imagem) 
values(
   'Lavadora de roupas',
   'lavadora2.jpg',
   'Maquina comum de lava roupa',
   '3000',
   '2000'
);
INSERT INTO	produtos (categoria, descricao, preco, preco_venda, imagem) 
values(
   'Lavadora de roupas',
   'lavadora3.png',
   'Maquina de lavar louca',
   '2000',
   '1500'
);
INSERT INTO	produtos (categoria, descricao, preco, preco_venda, imagem) 
values(
   'Lava-louça',
   'lavadora3.png',
   'Lava-louca comum com 8 servicos',
   '1500',
   '1000'
);
INSERT INTO	produtos (categoria, descricao, preco, preco_venda, imagem) 
values(
   'Lava-louça',
   'lavar_louca.jpg',
   'Lava-louca moderna com 10 servicos',
   '3000',
   '2000'
);
