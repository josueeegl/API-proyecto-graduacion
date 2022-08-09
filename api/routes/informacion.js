const express = require("express");
const router = express.Router();
const { isAuthenticated } = require("../auth/index");
require("../connection/mongoose");
const { getInfo } = require("../controllers/info");

router.get("/informacion", isAuthenticated, getInfo);
module.exports = router;
