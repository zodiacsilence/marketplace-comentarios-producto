// models/Comentario.js
const mongoose = require('mongoose');

const comentarioSchema = new mongoose.Schema({
  nombreUsuario: { type: String, required: true },
  estrellas: { type: Number, required: true, min: 1, max: 5 },
  comentario: { type: String, required: true }
});

const Comentario = mongoose.model('Comentario', comentarioSchema);

module.exports = Comentario;
