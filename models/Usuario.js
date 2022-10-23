const {model,Schema}  = require('mongoose')


const UsuarioSchema = Schema({
    nombre:{
        type: String,
        required: [true, 'El usuario es obligatorio']
    },
    correo:{
        type: String,
        required: [true, 'El correo es obligatorio']
    },
    contraseña:{
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    img:{
        type:String
    },
    rol:{
        type: String,
        required: true
    },
    estado:{
        type: Boolean,
        default: true
    },
    google:{
        type: Boolean,
        default: false
    }
})

module.exports = model("Usuario", UsuarioSchema)