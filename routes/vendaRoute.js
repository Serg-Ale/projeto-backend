const express = require("express");
const {
  getVendas,
  getVenda,
  postVenda,
  putVenda,
  deleteVenda,
} = require("../controllers/vendaController");
const auth = require("../helpers/auth");
const pagination = require("../helpers/pagination");
const vendaModel = require("../models/vendaModel");
const getPaginado = require("../helpers/getPaginado");
const router = express.Router();

router.get("/", pagination(vendaModel), getPaginado);
router.get("/:id_venda", getVenda);
router.post("/", postVenda);
router.put("/:id_venda", putVenda);
router.delete("/:id_venda", deleteVenda);

module.exports = router;
