// const express = require("express");
// const {
//   getCliente,
//   postCliente,
//   putCliente,
//   deleteCliente,
// } = require("../controllers/ClienteController");
// const auth = require("../helpers/auth");
// const pagination = require("../helpers/pagination");
// const ClienteModel = require("../models/ClienteModel");
// const getPaginado = require("../helpers/getPaginado");
// const router = express.Router();

// router.get("/", pagination(ClienteModel), getPaginado);
// router.get("/:id_cliente", getCliente);
// router.post("/", auth, postCliente);
// router.put("/:id_cliente", auth, auth, putCliente);
// router.delete("/:id_cliente", auth, deleteCliente);

// module.exports = router;
