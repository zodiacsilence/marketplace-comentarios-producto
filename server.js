// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const comentariosRoutes = require('./routes/comentarios');

const app = express();
const PORT = 8888;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/comentarios', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.log('Error de conexión a MongoDB:', err));

app.use('/api/comentarios', comentariosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
