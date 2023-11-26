const express = require("express");
const router = express.Router();
const sequelize = require("../helpers/database");
const adminModel = require("../models/adminModel");

router.get("/", async (req, res) => {
  await sequelize.sync({ force: true });

  let usuario = "admin1";
  let email = "admin@example.com";
  let senha = "password";
  await adminModel.save(usuario, email, senha);

  res.json({ usuario, email, senha });
});

module.exports = router;
