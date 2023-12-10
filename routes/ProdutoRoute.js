const express = require("express");
const router = express.Router();

const ProdutoController = require("../controllers/ProdutoController");
const ProdutoModel = require("../models/ProdutoModel");
const pagination = require("../helpers/pagination");
const getPaginado = require("../helpers/getPaginado");

router.get("/", pagination(ProdutoModel), getPaginado);
router.get("/:id_produto", ProdutoController.obterItemPorId);
router.post("/", ProdutoController.criarItem);
router.put("/:id_produto", ProdutoController.atualizarItem);
router.delete("/:id_produto", ProdutoController.excluirItem);

module.exports = router;
