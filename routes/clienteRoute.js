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
router.get("/:id_cliente", getCliente);
router.post("/", postCliente);
router.put("/:id_cliente", auth, putCliente);
router.delete("/:id_cliente", auth, deleteCliente);

module.exports = router;
