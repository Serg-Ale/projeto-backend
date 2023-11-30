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

router.get("/", auth, getClientes);
router.get("/:id", auth, getCliente);
router.post("/", auth, postCliente);
router.put("/:id", auth, putCliente);
router.delete("/:id", auth, deleteCliente);

module.exports = router;
