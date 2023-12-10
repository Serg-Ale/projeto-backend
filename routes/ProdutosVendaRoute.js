const express = require("express");
const router = express.Router();

const ProdutosVendaController = require("../controllers/ProdutosVendaController");
const ProdutosVendaModel = require("../models/ProdutosVendaModel");
const pagination = require("../helpers/pagination");
const getPaginado = require("../helpers/getPaginado");

router.get("/", pagination(ProdutosVendaModel), getPaginado);
router.get("/:id_produtos_venda", ProdutosVendaController.obterItemPorId);
router.post("/", ProdutosVendaController.criarItem);
router.put("/:id_produtos_venda", ProdutosVendaController.atualizarItem);
router.delete("/:id_produtos_venda", ProdutosVendaController.excluirItem);

module.exports = router;
