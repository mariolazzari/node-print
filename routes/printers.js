const router = require("express").Router();
const { getPrintersList } = require("../controllers/printers");

// printer routes
router.route("/list").get(getPrintersList);

module.exports = router;
