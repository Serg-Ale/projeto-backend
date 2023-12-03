const express = require("express");
const router = express.Router();
const sequelize = require("../helpers/database");
const auth = require("../helpers/auth");
const {
  criarUsuarios,
  criarProdutos,
  criarVenda,
} = require("../controllers/installController");

router.get("/", auth, async (req, res) => {
  await sequelize.sync({ force: true });

  await criarUsuarios(30);
  await criarProdutos();
  await criarVenda(30);

  res.json({ message: `Instalação concluída com sucesso!` });
});

module.exports = router;
