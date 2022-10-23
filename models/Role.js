const {model,Schema} = require('mongoose');

const rolesSchema = Schema({
    rol: {
        type: String,
        required: [true, 'El rol es obligatorio']
    }
})

module.exports = model("Roles", rolesSchema)