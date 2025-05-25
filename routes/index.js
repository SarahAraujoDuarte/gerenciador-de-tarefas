const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {nod
  res.send('Servidor está funcionando, boa diva!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:3000`);
});
