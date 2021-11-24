const express = require("express")
const Callback = require("../controllers/callback")
const router = express.Router()

router.post("/callback", Callback)

module.exports = router
