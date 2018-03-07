const fs = require('fs');
const glob = require("glob");
const path = require('path');
const jsdoc2md = require('jsdoc-to-markdown');
// let files = fs.readdirSync(path.resolve(__dirname, 'core/'));

function ensureDirectoryExistence(filePath) {
  var dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

function renameToMd(filename) {
  return filename.replace('core/', 'wiki/').replace('.js', '.md');
}

glob("core/**/*.js", function (er, files) {
  if (er) {
    throw new Error(er);
    return 1;
  }

  files = files.filter( filename => {
    return !filename.includes('.spec.js');
  })

  for (let file of files) {
    console.log(`Generating Docs for ${file}`);
    let text = jsdoc2md.renderSync({
      files: path.resolve(__dirname, file)
    });
    let markdownFilename = renameToMd(file);
    console.log(`Exporting to ${markdownFilename}`);
    ensureDirectoryExistence(path.resolve(__dirname, markdownFilename))
    fs.writeFileSync(path.resolve(__dirname, markdownFilename), text);
  }
})