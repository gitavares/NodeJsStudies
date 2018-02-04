var http = require('http');

//outras opcoes para headers... 'text/html' 
var opcoes = {
	hostname: 'localhost',
	port: 3000,
	path: '/',
	method: 'get',
	headers: {
		'Accept' : 'application/json',
		'Content-type' : 'application/json'
	}
}

//Content-type
// var html = 'nome=José'; //x-www-form-urlencoded
// var json = {nome :  'José'};
// var string_json = JSON.stringify(json);

var buffer_corpo_response = [];

// http do modulo do Node. é diferente do http acima.
var req = http.request(opcoes, function(res){
	
	res.on('data', function(pedaco){
		buffer_corpo_response.push(pedaco);
	});

	res.on('end', function(){
		var corpo_response = Buffer.concat(buffer_corpo_response).toString();
		console.log(corpo_response);
		console.log(res.statusCode);
	});

	res.on('error', function(){

	});
});

// req.write(string_json);
req.end();