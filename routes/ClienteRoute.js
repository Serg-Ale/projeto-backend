const express = require("express");
const router = express.Router();

const ClienteController = require("../controllers/ClienteController");
const ClienteModel = require("../models/ClienteModel");
const pagination = require("../helpers/pagination");
const getPaginado = require("../helpers/getPaginado");

router.get("/", pagination(ClienteModel), getPaginado);
router.get("/:id_cliente", ClienteController.obterItemPorId);
router.post("/", ClienteController.criarItem);
router.put("/:id_cliente", ClienteController.atualizarItem);
router.delete("/:id_cliente", ClienteController.excluirItem);

module.exports = router;
