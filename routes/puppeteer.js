// Puppeteer routings
const router = require("express").Router();
const { printFile, printSite } = require("../controllers/puppeteer");

router.route("/file").get(printFile);
router.route("/site").get(printSite);

module.exports = router;
