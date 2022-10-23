const bcrypt = require('bcryptjs')
const {request,response} = require('express')
const Usuario = require('../models/Usuario')

usuariosGet = (req = request,res = response)=>{
    res.send("Soy el get perro")
}

usuariosPut = (req = request,res = response)=>{
    res.json({
        msg:"Soy el put"
    })
}

usuariosPost = async(req = request,res = response)=>{
    const {nombre, correo, contraseña, rol} = req.body;
    const usuario = new Usuario({nombre,correo,contraseña,rol});

    //Encripto contraseña
    const salt = bcrypt.genSaltSync(10);
    usuario.contraseña = bcrypt.hashSync(contraseña,salt)

    
    //Si todo va bien lo guardo
    try {
        await usuario.save()
        console.log('Datos guardados')
    } catch (error) {
        console.log(error)
    }

    res.json({
        msg: 'Respuesta Api-Post',
        usuario
    })
}

usuariosDelete = (req = request,res = response)=>{
    res.send("Soy el delete perro")
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}