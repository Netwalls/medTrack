const express = require("express");
const router = express.Router();
const { updateProfile } = require("../controller/profile.controller");

router.post("/update", updateProfile);

module.exports = router;
