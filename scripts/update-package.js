
const fs = require('fs');
const path = require('path');

// Read the package.json file
const packageJsonPath = path.resolve(__dirname, '../package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Add new scripts
packageJson.scripts = {
  ...packageJson.scripts,
  "build:capacitor": "npm run build && npx cap sync",
  "prepare:mobile": "npm run build:capacitor && echo 'Mobile build prepared for Capacitor'",
  "analyze": "npx vite-bundle-analyzer"
};

// Write the updated package.json file
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log('Updated package.json with new scripts.');
