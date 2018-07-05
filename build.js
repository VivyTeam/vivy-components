/* eslint no-console: 0 */
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function runCommand(command) {
  try {
    const { stdout, stderr } = await exec(command);
    console.log(`Command completed: ${stdout}`);
    console.log(stderr);
  } catch (err) {
    throw new Error(`Command failed: ${err}`);
  }
}

async function runBuildProcess() {
  const version = process.argv[2];

  console.log(`Running build process for vivy-components ${version}`);

  const build = 'npm run build:storybook && npm run build:package';
  const archive = `cp package.json ./dist/build && cd dist/ && tar -zcvf vivy-components-${version}.tar.gz build/`;
  await runCommand(build);
  await runCommand(archive);
}

runBuildProcess();
