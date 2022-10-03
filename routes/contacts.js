const express = require("express");
const router = express.Router();
const controller = require("../controllers/contacts");

router.get("/", controller.getAllDocs);
router.get("/:id", controller.getOneDoc);

router.post("/", controller.makeNewContact);
router.put("/:id", controller.updateContact);
router.delete("/:id", controller.deleteContact);

module.exports = router;
