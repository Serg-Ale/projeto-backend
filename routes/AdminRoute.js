const express = require("express");
const auth = require("../helpers/auth");
const router = express.Router();

const AdminController = require("../controllers/AdminController");
const getPaginado = require("../helpers/getPaginado");
const pagination = require("../helpers/pagination");
const AdminModel = require("../models/AdminModel");

router.get("/", pagination(AdminModel), getPaginado);
router.get("/:id_admin", AdminController.obterItemPorId);
router.post("/", AdminController.criarItem);
router.put("/:id_admin", AdminController.atualizarItem);
router.delete("/:id_admin", AdminController.excluirItem);

router.post("/criar-cliente", auth, AdminController.criarCliente);
router.post("/criar-funcionario", auth, AdminController.criarFuncionario);
router.put(
  "/atualizar-cliente/:id_cliente",
  auth,
  AdminController.atualizarCliente
);
router.put(
  "/atualizar-funcionario/:id_funcionario",
  auth,
  AdminController.atualizarFuncionario
);

router.delete(
  "/delete-funcionario/:id_funcionario",
  auth,
  AdminController.excluirFuncionario
);
router.delete(
  "/delete-cliente/:id_cliente",
  auth,
  AdminController.excluirCliente
);
module.exports = router;
