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
router.get("/:id", getFuncionario);
router.post("/", postFuncionario);
router.put("/:id", putFuncionario);
router.delete("/:id", deleteFuncionario);

module.exports = router;
