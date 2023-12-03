const express = require("express");
const auth = require("../helpers/auth");
const router = express.Router();

const {
  getFuncionario,
  postFuncionario,
  putFuncionario,
  deleteFuncionario,
} = require("../controllers/funcionarioController");
const funcionarioModel = require("../models/funcionarioModel");
const getPaginado = require("../helpers/getPaginado");
const pagination = require("../helpers/pagination");

router.get("/", pagination(funcionarioModel), getPaginado);
router.get("/:id_funcionario", getFuncionario);
router.post("/", auth, postFuncionario);
router.put("/:id_funcionario", auth, putFuncionario);
router.delete("/:id_funcionario", auth, deleteFuncionario);

module.exports = router;
