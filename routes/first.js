const express = require("express");
const { competencia } = require("../controller/firstController");


const router = express.Router();

router.get("/semrush", competencia);



module.exports = router;
