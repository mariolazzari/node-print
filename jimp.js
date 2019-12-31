const Jimp = require("jimp");

(async function main() {
  const font = await Jimp.loadFont(Jimp.FONT_SANS_16_BLACK);
  const image = await Jimp.read("data/label.jpg");

  const mission = 54321;
  const item = "Codice articolo";
  const quantity = 123;

  image.print(font, 115, 65, mission);
  image.print(font, 115, 90, item);
  image.print(font, 320, 205, quantity);

  image.write("label2.jpg");
})();
