/* eslint no-console: 0 */
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const { version } = require('./package.json');

// Run a chain of commands within a single process
async function runCommands(commands) {
  try {
    const combinedCommands = commands.reduce(
      (accum, value) => `${accum} && ${value}`
    );
    console.log(`Starting command: ${combinedCommands}`);
    const { stdout, stderr } = await exec(combinedCommands);

    console.log(`Command "${combinedCommands}" completed. Output:\n${stdout}`);
    console.log(stderr);

    return stdout;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
}

(async function runBuildProcess() {
  console.log(`Running git tag process for vivy-components ${version}`);
  return runCommands([`git tag ${version}`, `git push origin ${version}`]);
})();
