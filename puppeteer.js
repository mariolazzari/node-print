const puppeteer = require("puppeteer");
const path = require("path");

// test files
const LABEL = path.join(__dirname, "data", "label.jpg");
const FILE = path.join(__dirname, "data", "file.pdf");
const SITE = path.join(__dirname, "data", "site.pdf");
// puppeteer options
const viewPort = { width: 1440, height: 900, deviceScaleFactor: 2 };
const goto = { waitUntil: "networkidle2" };

// save url as PDF
const printSite = async (url = "https://italcoeng.com") => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport(viewPort);
    await page.goto(url, goto);
    await page.pdf({
      path: SITE,
      pageRanges: "1",
      format: "A4",
      printBackground: true,
    });
    browser.close();
  } catch (error) {
    console.log("Error while printing file with puppeteer.", error);
  }
};

// save file to pdf
const printFile = async (file = LABEL) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport(viewPort);
    await page.goto(`file://${file}`, goto);
    await page.pdf({
      path: FILE,
      pageRanges: "1",
      format: "A4",
      printBackground: true,
    });
    browser.close();
  } catch (error) {
    console.log("Error while printing file with puppeteer.", error);
  }
};

printSite();
printFile();

// exports
module.exports = {
  printSite,
  printFile,
};
