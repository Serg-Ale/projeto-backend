const express = require("express");
const auth = require("../helpers/auth");
const router = express.Router();

const {
  getFuncionarios,
  getFuncionario,
  postFuncionario,
  putFuncionario,
  deleteFuncionario,
} = require("../controllers/funcionarioController");

router.get("/", getFuncionarios);
router.get("/:id_funcionario", getFuncionario);
router.post("/", auth, postFuncionario);
router.put("/:id_funcionario", auth, putFuncionario);
router.delete("/:id_funcionario", auth, deleteFuncionario);

module.exports = router;
