const express = require('express');
const {check,query} = require("express-validator")

const{ emailExiste, rolExiste } = require('../helpers/db-validaciones')
const {validarCampos} = require('../middlewares/validar-campos')


//Controllers
const {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
} = require('../controllers/usuarios')

//Inicializo el router
const router = express.Router();

router.get('/',[
    query('limite',"El valor del 'limite' debe ser númerico").isNumeric().optional(),
    query('Desde', "El valor 'desde' debe ser númerico").isNumeric().optional(),
],usuariosGet)

router.put('/:id',[
    
],
 usuariosPut)

router.post('/',[
    //Middlewares
    check('nombre', 'El nombre es obligatorio').notEmpty(),
    check('correo', 'El correo no es válido').isEmail().custom(emailExiste),
    check('contraseña','La contraseña es obligatoria y debe ser mayor a 6 dígitos').notEmpty().isLength({min:6}),
    check('rol').custom(rolExiste),
    validarCampos
],
 usuariosPost)

router.delete('/:id', usuariosDelete)





module.exports = router;