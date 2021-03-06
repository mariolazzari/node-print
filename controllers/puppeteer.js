// Puppeterr controller
const path = require("path");
const fs = require("fs");
const puppeteer = require("puppeteer");
const printer = require("pdf-to-printer");

// puppeteer options
const viewPort = { width: 1440, height: 900, deviceScaleFactor: 2 };
const goto = { waitUntil: "networkidle2" };
const SITE_PDF = path.join(process.root, "data", "site.pdf");

// print resource
const print = async (url, format = "A4") => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport(viewPort);
  await page.goto(url, goto);
  await page.pdf({
    path: SITE_PDF,
    pageRanges: "1",
    format,
    printBackground: true
  });
  browser.close();
};

// save url as PDF
const printSite = async (req, res, next) => {
  if (!req.query || !req.query.site) {
    return res
      .status(400)
      .json({ message: "Please enter site in query string." });
  }

  const { site } = req.query;

  try {
    // create pdf from site
    await print(site);
    // send to default printer
    await printer.print(SITE_PDF);
    // remove temp pdf
    fs.unlinkSync(SITE_PDF);
    // server response
    res
      .status(200)
      .json({ message: "Site succesfully converted to PDF.", site });
  } catch (ex) {
    res.status(500).json({
      message: "Error while converting site to PDF",
      site,
      error: ex.message
    });
  }
};

// save file to pdf
const printFile = async (req, res, next) => {
  try {
    const file = path.join(process.root, "node-print", "../data/label.jpg");

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport(viewPort);
    await page.goto(`file://${file}`, goto);
    await page.pdf({
      path: "label.pdf",
      pageRanges: "1",
      format: "A5",
      printBackground: false
    });
    browser.close();

    printer.print("label.pdf");

    res.status(200).json({ message: "File printed." });
  } catch (ex) {
    console.error(ex);
    res.status(500).json({ error: ex.message });
  }
};

// exports
module.exports = { printSite, printFile };
