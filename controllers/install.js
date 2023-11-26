const express = require("express")
const router = express.Router()
const sequelize = require("../helpers/database")
const adminModel = require("../models/adminModel")

router.get('/', async (req, res) => {
    await sequelize.sync({ force: true })

    let nome = "admin1";
    let sobrenome = "Silva";
    await adminModel.save(nome, sobrenome);

    res.json({nome, sobrenome})
})

module.exports = router
