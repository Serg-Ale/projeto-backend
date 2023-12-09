const express = require("express");
const router = express.Router();

const ClienteController = require("../controllers/ClienteController");

router.post("/", ClienteController.criarItem);
router.get("/", ClienteController.obterTodosItens);
router.get("/:id_cliente", ClienteController.obterItemPorId);
router.put("/:id_cliente", ClienteController.atualizarItem);
router.delete("/:id_cliente", ClienteController.excluirItem);

module.exports = router;