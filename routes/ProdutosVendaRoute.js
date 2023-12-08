const express = require("express");
const router = express.Router();

const ProdutosVendaController = require("../controllers/ProdutosVendaController");

router.post("/", ProdutosVendaController.criarItem);
router.get("/", ProdutosVendaController.obterTodosItens);
router.get("/:id_produtos_venda", ProdutosVendaController.obterItemPorId);
router.put("/:id_produtos_venda", ProdutosVendaController.atualizarItem);
router.delete("/:id_produtos_venda", ProdutosVendaController.excluirItem);

module.exports = router;
