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

router.get("/", auth, getAdmins);
router.get("/:id_admin", auth, getAdmin);
router.post("/", auth, postAdmin);
router.put("/:id_admin", auth, putAdmin);
router.delete("/:id_admin", auth, deleteAdmin);

module.exports = router;
