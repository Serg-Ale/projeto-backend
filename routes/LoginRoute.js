const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  let { usuario, senha } = req.body;
  if (usuario != "" && usuario == senha) {
    let token = jwt.sign(
      { user: usuario },
      "Se a gente passar vc vai ser padrinho!!! :D",
      {
        expiresIn: "120 min",
      }
    );
    res.json({ logged: true, token: token });
  } else {
    res
      .status(403)
      .json({ logged: false, mensagem: "Usuário ou senha invalidos!" });
  }
});

module.exports = router;
