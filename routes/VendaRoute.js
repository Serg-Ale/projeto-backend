const express = require("express");
const router = express.Router();

const VendaController = require("../controllers/vendaController");

router.post("/", VendaController.criarItem);
router.get("/", VendaController.obterTodosItens);
router.get("/:id_venda", VendaController.obterItemPorId);
router.put("/:id_venda", VendaController.atualizarItem);
router.delete("/:id_venda", VendaController.excluirItem);

module.exports = router;
