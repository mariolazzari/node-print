const router = require("express").Router();

router.use("/printers", require("./printers"));

module.exports = router;
