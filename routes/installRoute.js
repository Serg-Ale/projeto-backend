const express = require("express");
const router = express.Router();
const sequelize = require("../helpers/database");
const adminModel = require("../models/adminModel");

router.get("/", async (req, res) => {
  await sequelize.sync({ force: true });

  const qtd = 50;

  for (let i = 1; i <= qtd; i++) {
    const obj = {
      usuario: `user-${i}`,
      email: `${i}@gmail.com`,
      senha: `${i}@gmail.com`,
    };
    await adminModel.save(obj.usuario, obj.email, obj.senha);
  }
  res.json({ message: `created ${qtd} admins successfully` });
});

module.exports = router;
