const bcrypt = require('bcryptjs')
const {request,response} = require('express')
const Usuario = require('../models/Usuario')

usuariosGet = async(req = request,res = response)=>{
    const {limite = 5, desde = 0} = req.query;
    const query = {estado:true}

    const [total,usuarios] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ])

    res.json({
        total,
        usuarios
    })

}

usuariosPut = async(req = request,res = response)=>{
    //Todo: Hacer las validaciones desde la ruta

    const {id} = req.params;
    const {_id, contraseña,google,correo,rol, ...resto} = req.body;

    

     if(contraseña){
        const salt = bcrypt.genSaltSync(10);
        resto.contraseña =  bcrypt.hashSync(contraseña,salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto)

    res.json(usuario); 
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

usuariosDelete = async(req = request,res = response)=>{
    const {id} = req.params;

    const usuario = await Usuario.findByIdAndUpdate(id, {estado: false});

    res.json({
        msg: "Usuario borrado",
        usuario
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}