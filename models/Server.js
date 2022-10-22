const express = require('express');
const cors    = require('cors');

class Server {
    constructor(){
        this.app  = express();
        this.port = process.env.port;
        this.usuariosRoute = '/api/usuarios';

        this.middlewares();

        this.routes();
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