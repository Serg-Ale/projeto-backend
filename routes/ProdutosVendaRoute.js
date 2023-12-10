const express = require("express");
const router = express.Router();

const ProdutosVendaController = require("../controllers/ProdutosVendaController");
const ProdutosVendaModel = require("../models/ProdutosVendaModel");
const pagination = require("../helpers/pagination");
const getPaginado = require("../helpers/getPaginado");
const auth = require("../helpers/auth");

router.get("/", pagination(ProdutosVendaModel), getPaginado);
router.get("/:id_produtos_venda", ProdutosVendaController.obterItemPorId);
router.post("/", auth, ProdutosVendaController.criarItem);
router.put("/:id_produtos_venda", auth, ProdutosVendaController.atualizarItem);
router.delete("/:id_produtos_venda", auth, ProdutosVendaController.excluirItem);
module.exports = router;
