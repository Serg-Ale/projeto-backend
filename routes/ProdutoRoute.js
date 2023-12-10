const express = require("express");
const router = express.Router();

const ProdutoController = require("../controllers/ProdutoController");
const ProdutoModel = require("../models/ProdutoModel");
const pagination = require("../helpers/pagination");
const getPaginado = require("../helpers/getPaginado");

const auth = require("../helpers/auth");

router.get("/", pagination(ProdutoModel), getPaginado);
router.get("/:id_produto", ProdutoController.obterItemPorId);
router.post("/", auth, ProdutoController.criarItem);
router.put("/:id_produto", auth, ProdutoController.atualizarItem);
router.delete("/:id_produto", auth, ProdutoController.excluirItem);

module.exports = router;
