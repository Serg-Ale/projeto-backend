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

router.get("/",  getProdutos);
router.get("/:id_produto",  getProduto);
router.post("/",  postProduto);
router.put("/:id_produto",  putProduto);
router.delete("/:id_produto",  deleteProduto);

module.exports = router;