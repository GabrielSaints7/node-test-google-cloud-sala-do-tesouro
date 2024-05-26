const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// Rota para retornar a mensagem de boas-vindas
app.get('/', (req, res) => {
    res.json({ mensagem: 'Bem-vindo!' });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
