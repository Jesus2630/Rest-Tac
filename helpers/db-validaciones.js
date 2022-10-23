const Usuario = require('../models/Usuario')
const Roles = require('../models/Role')

const rolExiste = async(rol = '') =>{
    const rolExiste = await Roles.findOne({rol});
    if(!rolExiste){
        throw new Error(`El rol: ${rol} no está registrado`)
    }
}

const emailExiste = async(correo = '') =>{
    const emailExiste = await Usuario.findOne({correo});
    if(emailExiste){
        throw new Error(`El email ${correo} no está disponible`)
    }
}

const existeUsuarioID = async(id = '') =>{
    const existeUsuario = await Usuario.findById(id);

    if(!existeUsuario){
        throw new Error(`El id: ${id} no es válido`)
    }
}



module.exports = {
    emailExiste,
    rolExiste,
    existeUsuarioID
}