const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usuarioSchema = new Schema ({
    email: {type: String, required: true, unique: true},
    senha: {type: String, required: true},
}, {
    timestamps: true,
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;