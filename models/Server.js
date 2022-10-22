const express = require('express');
const cors    = require('cors');

class Server {
    constructor(){
        this.app  = express();
        this.port = process.env.port;

    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor iniciado en el puerto ${this.port}`)
        })
    }
}


module.exports = Server;