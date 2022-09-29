const express = require("express");
const router = express.Router();
const controller = require("../controllers/contacts");

router.get("/", controller.getAllDocs);
router.get("/:id", controller.getOneDoc);

module.exports = router;
