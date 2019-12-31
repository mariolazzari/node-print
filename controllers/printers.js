const printer = require("pdf-to-printer");
const path = require("path");
const Jimp = require("jimp");

// test file to print and print options
const TEST_PDF = path.join(process.root, "data", "test.pdf");
const options = {
  printer: "PDFCreator"
};

// test file for printing labels
const LABEL = path.join(process.root, "data", "label.jpg");

// get printers list
const getPrintersList = async (req, res, next) => {
  try {
    const printers = await printer.list();
    res.status(200).json({
      message: `Total printers available on this server: ${printers.length}`,
      printers
    });
  } catch (ex) {
    res.status(500).json({
      message: "Error while getting printers list.",
      error: ex.message
    });
  }
};

// print pdf
const printPDF = async (req, res, next) => {
  try {
    await printer.print(TEST_PDF, options);
    res.status(200).json({
      message: `PDF file ${TEST_PDF} sent to printer ${options.printer}.`
    });
  } catch (error) {
    res.status(500).json({
      message: `Error while sending PDF file ${TEST_PDF} to printer ${options.printer}.`,
      error
    });
  }
};

// print label
const printLabel = async (req, res, next) => {
  res.status(200).json({ message: "Not yet implemented..." });
};

// exports
module.exports = {
  getPrintersList,
  printPDF,
  printLabel
};
