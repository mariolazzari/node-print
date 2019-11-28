const printer = require("pdf-to-printer");

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

module.exports = {
  getPrintersList
};
