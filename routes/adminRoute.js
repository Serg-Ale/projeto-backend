const express = require("express");
const {
  getAdmins,
  getAdmin,
  postAdmin,
  putAdmin,
  deleteAdmin,
} = require("../controllers/adminController");
const auth = require("../helpers/auth");
const router = express.Router();

router.get("/", getAdmins, auth.validaAcesso);
router.get("/:id", getAdmin, auth.validaAcesso);
router.post("/", postAdmin, auth.validaAcesso);
router.put("/:id", putAdmin, auth.validaAcesso);
router.delete("/:id", deleteAdmin, auth.validaAcesso);

module.exports = router;
