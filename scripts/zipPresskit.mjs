import path from "path";
import JSZip from "jszip";
import fs from "fs/promises";
import { images } from "../src/tokens/presskit";

function zipArrays(a, b) {
  return a.map(function (value, index) {
    return [value, b[index]];
  });
}

const moduleURL = new URL(import.meta.url);
const __dirname = path.dirname(moduleURL.pathname);

async function run() {
  const imagesDir = path.join(__dirname, "..", "public", "assets", "images");

  const imageFileNames = Object.values(images);
  const readFilePromises = imageFileNames.map((filePath) => {
    return fs.readFile(path.join(imagesDir, filePath));
  });
  const imageFileContents = await Promise.all(readFilePromises);
  const imageFiles = zipArrays(imageFileNames, imageFileContents);

  const zip = new JSZip();

  imageFiles.forEach(([filePath, fileContents]) => {
    zip.file(filePath, fileContents);
  });

  const zipOutPath = path.join(__dirname, "..", "public", "presskit.zip");
  zip.generateAsync({ type: "nodebuffer" }).then(function (content) {
    fs.writeFile(zipOutPath, content);
  });
}

run();
