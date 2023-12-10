const express = require("express");
const router = express.Router();

const VendaController = require("../controllers/vendaController");
const pagination = require("../helpers/pagination");
const getPaginado = require("../helpers/getPaginado");
const VendaModel = require("../models/VendaModel");

router.get("/", pagination(VendaModel), getPaginado);
router.get("/:id_venda", VendaController.obterItemPorId);
router.post("/", VendaController.criarItem);
router.put("/:id_venda", VendaController.atualizarItem);
router.delete("/:id_venda", VendaController.excluirItem);

module.exports = router;
