const router = require("express").Router();
const { getPrintersList, printPDF } = require("../controllers/printers");

// printer routes
router.route("/list").get(getPrintersList);
router.route("/print").get(printPDF);

module.exports = router;
