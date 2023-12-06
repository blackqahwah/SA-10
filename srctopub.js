const fs = require('fs');
const path = require('path');

// Function to copy files
function copyFiles(src, public) {
  fs.readdirSync(src).forEach(file => {
    const sourceFile = path.join(src, file);
    const targetFile = path.join(public, file);

    if (fs.lstatSync(sourceFile).isDirectory()) {
      if (!fs.existsSync(targetFile)) {
        fs.mkdirSync(targetFile);
      }
      copyFiles(sourceFile, targetFile);
    } else {
      fs.copyFileSync(sourceFile, targetFile);
    }
  });
}

// Use the function
const src = './src'; // replace with your source directory
const public = './dist'; // replace with your target directory (public directory for Firebase)

copyFiles(src, public);
