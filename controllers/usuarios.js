const {request,response} = require('express')

usuariosGet = (req = request,res = response)=>{
    res.send("Soy el get perro")
}

usuariosPut = (req = request,res = response)=>{
    res.send("Soy el put perro")
}

usuariosPost = (req = request,res = response)=>{
    res.send("Soy el post perro")
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