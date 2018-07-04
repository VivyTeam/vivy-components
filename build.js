/* eslint no-console: 0 */
const { exec } = require('child_process');

const version = process.argv[2];

console.log(`Running build process for vivy-components ${version}`);

const compileCmd = 'npm run build:storybook && npm run build:package';
exec(compileCmd, (err, stdout) => {
  if (err) {
    console.log(`Compile command failed: ${err}`);
    return;
  }
  console.log(`Compile successful: ${stdout}`);
});

const cmd = `cp package.json ./dist/build && cd dist/ && tar -zcvf vivy-components-${version}.tar.gz build/`;
exec(cmd, (err, stdout) => {
  if (err) {
    console.log(`Package command failed: ${err}`);
    return;
  }

  console.log(`Package command successful: ${stdout}`);
});
