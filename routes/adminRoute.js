const express = require('express');
const { getAdmins, getAdmin, postAdmin, putAdmin, deleteAdmin } = require('../controllers/adminController');
const router = express.Router()

router.get("/", getAdmins);
router.get("/:id", getAdmin );
router.post("/", postAdmin);
router.put("/:id", putAdmin);
router.delete("/:id", deleteAdmin);






module.exports = router