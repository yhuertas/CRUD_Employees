//App.js es el corazòn del API, acà se define el el "home" de la apliaciòn, el puerto, el formato de comunicaciòn, las rutas.

const morgan = require("morgan"); //Permite ver la interacción entre el servidor y los clientes (el navegador). (HTTP request logger middleware for node.js)
const express = require("express");
const app = express(); //app contien toda la funcionalidad del server
const cors = require('cors')
app.set('port', process.env.PORT || 3000); //definciòn del puerto por el que escucharà el servidor.

//middleware
app.use(cors())//Permite hacer peticiones a este api desde direrentes fuentes.
app.use(morgan('dev')); //para indicar como queremos ver los mensajes en consola,hay varias: skip , combined, stream, common, short, tiny, etc
app.use(express.json()); //Perite interpretar los json que se envían desde el navegador al servidor.
app.use(express.urlencoded({ //esta junto con .json se usan para POST and PUT para indicarle al servidor que puede guardar la información enviada en el req.body. Object as strings or arrays
    extended: false //Para ni permitir objetos anidados
}));
//Routes
app.use("/api/employees", require('./routes/employees.routes')); // la ruta base de la api es /api/employees y se presigue de las rutas de employees.routes.js
app.use("/api/offices", require('./routes/office.routes'));
module.exports = app; //Se exporta la funcionalidad del api.