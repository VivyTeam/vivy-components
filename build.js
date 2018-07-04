/* eslint no-console: 0 */
const { exec } = require('child_process');

const version = process.argv[2];

console.log(`Running build process for vivy-components ${version}`);

const build = 'npm run build:storybook && npm run build:package';
exec(build, (err, stdout) => {
  if (err) {
    console.log(`Build command failed: ${err}`);
    return;
  }
  console.log(`Build successful: ${stdout}`);
});

const archive = `cp package.json ./dist/build && cd dist/ && tar -zcvf vivy-components-${version}.tar.gz build/`;
exec(archive, (err, stdout) => {
  if (err) {
    console.log(`Archive command failed: ${err}`);
    return;
  }
  console.log(`Archive command successful: ${stdout}`);
});
