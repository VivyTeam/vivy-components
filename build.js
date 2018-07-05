/* eslint no-console: 0 */
const { exec } = require('child_process');

const version = process.argv[2];

console.log(`Running build process for vivy-components ${version}`);

const build = 'npm run build:storybook && npm run build:package';
exec(build, (err, stdout) => {
  if (err) {
    throw new Error(`Build command failed: ${err}`);
  }
  console.log(`Build successful: ${stdout}`);
});

const archive = `cp package.json ./dist/build && cd dist/ && tar -zcvf vivy-components-${version}.tar.gz build/`;
exec(archive, (err, stdout) => {
  if (err) {
    throw new Error(`Archive command failed: ${err}`);
  }
  console.log(`Archive command successful: ${stdout}`);
});
