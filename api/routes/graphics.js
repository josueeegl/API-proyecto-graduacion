const express = require("express");
const router = express.Router();
const { isAuthenticated, hasRole } = require("../auth/index");
require("../connection/mongoose");
const { getGraphicsIng, getGraphicsMonths } = require("../controllers/graphics");

router.get("/graficas:dateSelected", isAuthenticated, getGraphicsIng);
module.exports = router;
