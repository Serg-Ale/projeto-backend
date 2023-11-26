const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  let { email, senha } = req.body;
  if (email != "" && email == senha) {
    let token = jwt.sign(
      { email },
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
