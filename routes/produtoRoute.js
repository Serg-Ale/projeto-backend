const express = require("express");
const auth = require("../helpers/auth");
const router = express.Router();

const {
  getProdutos,
  getProduto,
  postProduto,
  putProduto,
  deleteProduto,
} = require("../controllers/produtoController");
const pagination = require("../helpers/pagination");
const produtoModel = require("../models/produtoModel");
const getPaginado = require("../helpers/getPaginado");

router.get("/",  pagination(produtoModel), getPaginado);
router.get("/:id_produto",  getProduto);
router.post("/",  postProduto);
router.put("/:id_produto",  putProduto);
router.delete("/:id_produto",  deleteProduto);

module.exports = router;