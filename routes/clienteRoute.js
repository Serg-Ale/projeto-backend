const express = require("express");
const {
  getCliente,
  postCliente,
  putCliente,
  deleteCliente,
} = require("../controllers/clienteController");
const auth = require("../helpers/auth");
const pagination = require("../helpers/pagination");
const clienteModel = require("../models/clienteModel");
const getPaginado = require("../helpers/getPaginado");
const router = express.Router();

router.get("/", pagination(clienteModel), getPaginado);
router.get("/:id_cliente", getCliente);
router.post("/", auth, postCliente);
router.put("/:id_cliente", auth, auth, putCliente);
router.delete("/:id_cliente", auth, deleteCliente);

module.exports = router;
