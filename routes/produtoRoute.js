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
router.get("/:id",  getProduto);
router.post("/",  postProduto);
router.put("/:id",  putProduto);
router.delete("/:id",  deleteProduto);

module.exports = router;