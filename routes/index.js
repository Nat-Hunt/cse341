const express = require("express");
const router = express.Router();
const { index } = require("../controllers/index");

router.use("/contacts", require("./contacts"));
router.use("/", index);

module.exports = router;
