const express = require('express');
const cors    = require('cors');
const database = require('../config/db');

class Server {
    constructor(){
        this.app  = express();
        this.port = process.env.PORT;
        this.usuariosRoute = '/api/usuarios';

        this.conectarDb();

        this.middlewares();

        this.routes();
    }

    async conectarDb(){
        await database();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usuariosRoute, require('../routes/usuariosRoute'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor iniciado en el puerto ${this.port}`);
        })
    }
}


module.exports = Server;