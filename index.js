const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./api/routes/routes");
const connection = require('./api/database/database');

// Database connection
connection
	.authenticate()
	.then(() => {
		console.log('Conexão feita com sucesso ao Banco de dados!')
	})
	.catch((error) => {
		console.log(error)
	})
/** convert dados do form body */
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(routes);


app.listen(8080, ()=>{ console.log('APP rodando!') });