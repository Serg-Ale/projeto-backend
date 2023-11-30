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

router.get("/",  getFuncionarios);
router.get("/:id",  getFuncionario);
router.post("/", auth, postFuncionario);
router.put("/:id", auth, putFuncionario);
router.delete("/:id", auth, deleteFuncionario);

module.exports = router;
