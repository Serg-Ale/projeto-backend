const express = require("express");
const router = express.Router();
const sequelize = require("../helpers/database");
const AdminService = require("../services/AdminService");
const ProdutosVendaService = require("../services/ProdutosVendaService");
const InstallController = require("../controllers/InstallController");

router.get("/", async (req, res) => {
  await sequelize.sync({ force: true });

  await AdminService.criarItem({
    usuario: "administrador",
    email: "administracao@email.com",
    senha: "administrador",
  });

  await InstallController.criarProdutos();
  await InstallController.criarUsuarios(5);
  await InstallController.criarVendas(5);


  res.json({ message: `Instalação concluída com sucesso!` });
});

module.exports = router;
