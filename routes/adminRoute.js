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
router.get("/:id", auth, getAdmin);
router.post("/", auth, postAdmin);
router.put("/:id", auth, putAdmin);
router.delete("/:id", auth, deleteAdmin);

module.exports = router;
