// https://www.npmjs.com/package/pdf-to-printer
const printer = require("pdf-to-printer");
const TEST_FILE = "./data/test.pdf";

// show printers list
printer
  .list()
  .then(printers => console.log("Printers found:", printers))
  .catch(console.error);

// printer config
const options = {
  //printer: "Multifunzione"
  printer: "PDFCreator", // default one, if no printer option used
};

// send pdf directly to printer
const printPDF = async (pdf, options = {}) => {
  try {
    await printer.print(pdf, options);
    console.log(`${pdf} printed successfully.`);
  } catch (ex) {
    console.error(`Error while sending ${pdf} to printer.`, ex);
  }
};
printPDF(TEST_FILE, options);
