/* para instalar o mongodb na aplicação */
npm install mongodb --save

/* para executar o mongodb no shell */
cd Documents/mongodb/bin/
./mongod  --> server
./mongo   --> gerenciador do banco de dados

/* para iniciar a aplicação no shell */
nodemon app --> na pasta da aplicação


/* sobre os erros de conexao do mongodb 3 considerando a sintaxe aprendida na aula */
/*
When doing npm i mongodb, I get that version by default, which doesn't work right out of the bat with the tutorial.

npm i mongodb@^2 works.

Maybe consider specifying mongodb version while ^3 is still an rc, and later updating to the new API.

To run the Connectors tutorial using "mongodb": "^3.0.1" you'll need to modify the code as follows:

module.exports = async () => {
  const client = await MongoClient.connect(MONGO_URL)
  const db = client.db('hackernews')
  return { Links: db.collection('links') }
}
See also Pull-Request: Update 4-connectors.md #395

outros sites que falam sobre esse problema de versão
https://github.com/Automattic/mongoose/issues/5399

*/

