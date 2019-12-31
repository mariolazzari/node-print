const router = require("express").Router();
const {
  getPrintersList,
  printPDF,
  printLabel
} = require("../controllers/printers");

// printer routes
router.route("/list").get(getPrintersList);
router.route("/print").get(printPDF);
router.route("/printLabel").get(printLabel);

module.exports = router;
