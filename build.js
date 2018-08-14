/* eslint no-console: 0 */
const util = require('util');
const exec = util.promisify(require('child_process').execSync);
const { version } = require('./package.json');

const env = process.argv[2];

async function runCommands(commands) {
  try {
    const combinedCommands = commands.reduce(
      (accum, value) => `${accum} && ${value}`
    );
    console.log(`Starting command: ${combinedCommands}`);
    const { stdout, stderr } = await exec(combinedCommands);

    console.log(`Command "${combinedCommands}" completed. Output:\n${stdout}`);
    console.log(stderr);
  } catch (err) {
    console.error(err);
  }
}

async function publishPackage() {
  const build = 'npm run build:package';

  await runCommands([build]);
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

  if (env !== 'test') commands.push(pushToWebsite);

  await runCommands(commands);
}

(async function runBuildProcess() {
  console.log(`Running build process for vivy-components ${version}`);

  await publishPackage();
  // await updateWebsite();
})();
