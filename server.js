require('dotenv').config();
const express = require('express');
const Cors = require('cors');
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.mensajeriaRoutePath = '/api/mensajeria';
        this.middlewares();

        this.routes();



    }

    middlewares() {
        //Configuracion de donde puede obtener los endpoint 
        this.app.use(Cors());
        // Configuracion para obtener los JSON en los endpoint
        this.app.use(express.json())
        // vista General
        this.app.use(express.static('public'));

    }

    routes() {
        this.app.use(this.mensajeriaRoutePath, require('./routes/mensajeria'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Corriendo en el puerto: ${this.port}`);
        });
    }

}



module.exports = Server;