const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const startedAt = new Date().toISOString();
const environment = process.env.NODE_ENV || 'development';

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ephemeral Env Demo</title>
  <style>
    body { font-family: Arial, sans-serif; background: #f4f6fb; display: flex; justify-content: center; padding: 40px; }
    .card { background: #fff; border-radius: 12px; padding: 32px; max-width: 520px; box-shadow: 0 4px 16px rgba(0,0,0,.1); }
    h1 { color: #1F3864; margin-top: 0; }
    li { margin: 8px 0; }
    code { background: #eef; padding: 2px 6px; border-radius: 4px; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Ephemeral Env Demo</h1>
    <p>Este ambiente fue creado desde un repositorio de GitHub y desplegado en Heroku.</p>
    <ul>
      <li><strong>Entorno:</strong> ${environment}</li>
      <li><strong>Servidor iniciado:</strong> ${startedAt}</li>
      <li><strong>Version de Node.js:</strong> ${process.version}</li>
      <li><strong>Prueba de salud:</strong> <a href="/health"><code>/health</code></a></li>
    </ul>
    <p>Autor: Ricardo Fabian Navarro Gonzalez</p>
  </div>
</body>
</html>`);
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', environment, startedAt });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});