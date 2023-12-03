const express = require("express");
const router = express.Router();

const auth = require("../helpers/auth");
const pagination = require("../helpers/pagination");
const getPaginado = require("../helpers/getPaginado");

const produtoModel = require("../models/produtoModel");
const vendaModel = require("../models/vendaModel");
const produtosVendaModel = require("../models/produtosVendaModel");

const {
  getProdVenda,
  postProdVenda,
  putProdVenda,
  deleteProdVenda,
} = require("../controllers/produtosVendaController");

router.get("/", pagination(produtosVendaModel), getPaginado);
router.get("/:id_produtos_venda", getProdVenda);
router.post("/", auth, postProdVenda);
router.put("/:id_produtos_venda", auth, putProdVenda);
router.delete("/:id_produtos_venda", auth, deleteProdVenda);

module.exports = router;
