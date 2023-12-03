const express = require("express");
const router = express.Router();
const sequelize = require("../helpers/database");
const auth = require("../helpers/auth");
const {
  criarUsuarios,
  criarProdutos,
  criarVenda,
} = require("../controllers/installController");
const adminModel = require("../models/adminModel");

router.get("/", auth, async (req, res) => {
  await sequelize.sync({ force: true });

  await adminModel.save("Fulano de tal", "admin@admin.com", "admin@admin.com");
  await criarUsuarios(30);
  await criarProdutos();
  await criarVenda(30);

  res.json({ message: `Instalação concluída com sucesso!` });
});

module.exports = router;
