const express = require("express");
const {
  getClientes,
  getCliente,
  postCliente,
  putCliente,
  deleteCliente,
} = require("../controllers/clienteController");
const auth = require("../helpers/auth");
const router = express.Router();

router.get("/", getClientes);
router.get("/:id", getCliente);
router.post("/", postCliente);
router.put("/:id", auth, putCliente);
router.delete("/:id", auth, deleteCliente);

module.exports = router;
