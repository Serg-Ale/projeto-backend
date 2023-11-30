const jwt = require("jsonwebtoken");
const express = require("express");
const auth = require("../helpers/auth");
const router = express.Router();

router.post("/", (req, res) => {
  let { user, senha } = req.body;
  if (user != "" && user == senha) {
    let token = jwt.sign(
      { user },
      "Se a gente passar vc vai ser padrinho!!! :D",
      {
        expiresIn: "10 min",
      }
    );
    res.json({ logged: true, token: token });
  } else {
    res
      .status(403)
      .json({ logged: false, mensagem: "E-mail ou senha invalidos!" });
  }
});

module.exports = router;
