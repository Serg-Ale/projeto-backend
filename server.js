const express = require('express')
require('dotenv').config()

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3333;

app.get('/', (req, res) => {
  res.json({ message: 'Projeto Final da Disciplina AS63A - Programação Web Back-end - N13 (2023_02)' })
})

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
})