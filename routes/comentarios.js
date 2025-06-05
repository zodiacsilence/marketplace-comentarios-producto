// routes/comentarios.js
const express = require('express');
const router = express.Router();
const Comentario = require('../models/Comentario');

// POST Comentario
router.post('/', async (req, res) => {
  const { nombreUsuario, estrellas, comentario } = req.body;

  if (!nombreUsuario || !estrellas || !comentario) {
    return res.status(400).json({ error: 'Faltan datos en el comentario' });
  }

  try {
    const nuevoComentario = new Comentario({ nombreUsuario, estrellas, comentario });
    await nuevoComentario.save();
    res.status(201).json({ message: 'Comentario creado exitosamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el comentario' });
  }
});

// GET all
router.get('/', async (req, res) => {
  try {
    const comentarios = await Comentario.find();
    res.json(comentarios);
  } catch (error) {
    res.status(400).json({ error: 'Error al obtener comentarios' });
  }
});

// GET cantidad de comentarios
router.get('/cantidad', async (req, res) => {
  try {
    const cantidad = await Comentario.countDocuments();
    res.json({ cantidad });
  } catch (error) {
    res.status(400).json({ error: 'Error al obtener la cantidad de comentarios' });
  }
});

module.exports = router;
