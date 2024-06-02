const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usuarioSchema = new Schema ({
    email: {type: String, required: true},
    senha: {type: String, required: true},
}, {
    timestamps: true,
});

const usuario = mongoose.model('Usuario', usuarioSchema);

// eslint-disable-next-line no-undef
module.exports = usuario;