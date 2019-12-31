// Puppeteer routings
const router = require("express").Router();
const { printFile, printSite } = require("../controllers/puppeteer");

router.get("/file", printFile);
router.get("/site", printSite);

module.exports = router;
