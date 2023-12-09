const express = require("express");
const router = express.Router();

const AdminController = require("../controllers/AdminController");

router.post("/", AdminController.criarItem);
router.post("/criar-cliente", AdminController.criarCliente);
router.get("/", AdminController.obterTodosItens);

router.get("/:id_admin", AdminController.obterItemPorId);
router.put("/:id_admin", AdminController.atualizarItem);
router.delete("/:id_admin", AdminController.excluirItem);

module.exports = router;
