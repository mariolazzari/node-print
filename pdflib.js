const { degrees, PDFDocument, rgb, StandardFonts } = require("pdf-lib");
const fs = require("fs");

const test = async () => {
  // This should be a Uint8Array or ArrayBuffer
  // This data can be obtained in a number of different ways
  // If your running in a Node environment, you could use fs.readFile()
  // In the browser, you could make a fetch() call and use res.arrayBuffer()

  const existingPdfBytes = fs.readFileSync("data/label.pdf");

  // Load a PDFDocument from the existing PDF bytes
  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  // Embed the Helvetica font
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // Get the first page of the document
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  console.log(pages);

  // Get the width and height of the first page
  const { width, height } = firstPage.getSize();

  // Draw a string of text diagonally across the first page
  firstPage.drawText("This text was added with JavaScript!", {
    x: 0,
    y: 500,
    size: 50,
    font: helveticaFont,
    color: rgb(0.95, 0.1, 0.1),
    rotate: degrees(-45),
  });

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();

  fs.writeFileSync("testMario.pdf", pdfBytes);

  // For example, `pdfBytes` can be:
  //   • Written to a file in Node
  //   • Downloaded from the browser
  //   • Rendered in an <iframe>
};

test();
