const express = require("express");
const router = express.Router();

const FuncionarioController = require("../controllers/FuncionarioController");
const pagination = require("../helpers/pagination");
const getPaginado = require("../helpers/getPaginado");
const FuncionarioModel = require("../models/FuncionarioModel");

router.get("/", pagination(FuncionarioModel), getPaginado);
router.get("/:id_funcionario", FuncionarioController.obterItemPorId);
// router.post("/", FuncionarioController.criarItem);
// router.put("/:id_funcionario", FuncionarioController.atualizarItem);
// router.delete("/:id_funcionario", FuncionarioController.excluirItem);

module.exports = router;
