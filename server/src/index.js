//index.js es la pàgina principal del api donde se inicia el Servidor y la conecciòn a la base de datos.

const { mongoose } = require('../src/database') //lo primero que se hace es conectarse a la base de datos.
const app = require("./app"); //El app  está definido en app.js
//Settings
const port = app.get('port'); //Llamando la variable 'port' definida en app.js


//Iniciando el servidor.
app.listen(port);
console.log('Server on port', port)