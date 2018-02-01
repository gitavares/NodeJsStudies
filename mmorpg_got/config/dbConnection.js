/* importar o mongodb */
var mongo = require('mongodb');

var connMongoDB = function(){

	console.log('Entrou na funçnao de conexão');
	var db = new mongo.Db(
		'got',
		new mongo.Server(
			'localhost', //string  contendo o endereço do servidor
			27017, //porta de conexão
			{} //opções de configuracoes do servidor, que neste caso vai ficar vazio
		),
		{}
	);
	return db;

}

module.exports = function(){
	return connMongoDB;
}