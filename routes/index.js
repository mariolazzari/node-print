const router = require("express").Router();

router.use("/printers", require("./printers"));
router.use("/puppeteer", require("./puppeteer"));

module.exports = router;
