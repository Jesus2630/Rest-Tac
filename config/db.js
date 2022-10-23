const mongoose = require('mongoose')


const dbConnection = async()=>{
    const uri = process.env.URI;

    try {
        mongoose.connect(uri,{
            useNewUrlParser: true
        });
        console.log('Base de datos conectada correctamente')
    } catch (error) {
        console.log(error)
        throw new Error("No se puedo conectar a la base de datos")
    }
}

module.exports = dbConnection;