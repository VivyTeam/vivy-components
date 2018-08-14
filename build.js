/* eslint no-console: 0 */
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const { version } = require('./package.json');

const testEnv = process.argv[2] === 'test';

function compareVersions(first, second) {
  const verOne = first.replace(/\./g, '');
  const verTwo = second.replace(/\./g, '');

  return parseInt(verOne, 10) > parseInt(verTwo, 10);
}

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

async function publishPackage() {
  console.log('Publishing package to npm');

  const build = 'npm run build:package';
  const prepPackage =
    'cp package.json README.md index.js ./build && cd ./build';
  const npmPublish = testEnv ? 'npm pack' : 'npm publish --access public';

  await runCommands([build, prepPackage, npmPublish]);
}

// Build storybook website and push it to github pages
async function updateWebsite() {
  console.log('Updating static website');

  const buildStorybook = 'npm run build:storybook';
  const stageStaticWebsite = 'mkdir .static-website && cd .static-website';
  const clone =
    'git clone -b gh-pages git@github.com:UvitaTeam/vivy-components .';
  const updateStaticFiles =
    'rm -R storybook-static && cp -R ../storybook-static . && git add storybook-static/';
  const pushToWebsite =
    'git commit -m "Update static website files" && git push origin master';
  const commands = [
    buildStorybook,
    stageStaticWebsite,
    clone,
    updateStaticFiles,
  ];

  if (testEnv) commands.push(pushToWebsite);

  await runCommands(commands);
}

async function updateGitTag() {
  if (testEnv) return null;
  return runCommands([`git tag ${version}`, `git push origin ${version}`]);
}

(async function runBuildProcess() {
  console.log(`Running build process for vivy-components ${version}`);
  const tag = await runCommands(['git describe --abbrev=0 --tags']);

  // Check if the version has be incremented
  // if it has deploy package and update git tag
  const versionIncremented = compareVersions(version, tag);
  if (versionIncremented) {
    console.log(`${tag} has been incremented to ${version}, deploying package`);
    await publishPackage();
    await updateGitTag();
  }
  await updateWebsite();
})();
