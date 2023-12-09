const express = require("express");
const router = express.Router();

const FuncionarioController = require("../controllers/FuncionarioController");

router.post("/", FuncionarioController.criarItem);
router.get("/", FuncionarioController.obterTodosItens);
router.get("/:id_funcionario", FuncionarioController.obterItemPorId);
router.put("/:id_funcionario", FuncionarioController.atualizarItem);
router.delete("/:id_funcionario", FuncionarioController.excluirItem);

module.exports = router;
