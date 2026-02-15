const fs = require('fs');
const path = require('path');

const outputDirectory = path.join(process.cwd(), 'out');
const rootCnamePath = path.join(process.cwd(), 'CNAME');

if (fs.existsSync(outputDirectory)) {
  const noJekyllPath = path.join(outputDirectory, '.nojekyll');

  if (!fs.existsSync(noJekyllPath)) {
    fs.writeFileSync(noJekyllPath, '');
  }

  if (fs.existsSync(rootCnamePath)) {
    const outputCnamePath = path.join(outputDirectory, 'CNAME');
    fs.copyFileSync(rootCnamePath, outputCnamePath);
  }
}
