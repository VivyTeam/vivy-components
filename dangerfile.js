import { danger, warn, message } from "danger";
import includes from "lodash.includes";

const { pr } = danger.github;
const { modified_files: modifiedFiles } = danger.git;

const bigPRThreshold = 700;
if (pr.additions - pr.deletions > bigPRThreshold) {
  const title = "Big PR";
  const idea = `This PR is unlikely to get reviewed because it touches too many lines 
  (${pr.additions - pr.deletions}). 
  Consider sending smaller Pull Requests and stack them on top of each other.`;
  warn(`${title} - <i>${idea}</i>`);
} else {
  const title = "✅ Get a 🥇 for opening a small enough PR.";
  const idea = "Be proud of yourself!";
  message(`${title} - <i>${idea}</i>`);
}

if (pr.requested_teams.length === 0 && pr.requested_reviewers.length === 0) {
  const title = "Missing reviewer";
  const idea =
    "Looks like this pull request is missing a reviewer. That's OK as long as this PR is still a 'work in progress', if that is the case please add 'WIP' in the PR title or corresponding label.";
  warn(`${title} - <i>${idea}</i>`);
} else {
  const title = "✅ Get a 👍 for requesting reviewers.";
  const idea = "Celebrating every win!";
  message(`${title} - <i>${idea}</i>`);
}

if (pr.body.length < 10) {
  const title = "Missing description";
  const idea =
    "Help your reviewers by writing a paragraph or two with the goals and motives of this PR.";
  warn(`${title} - <i>${idea}</i>`);
} else {
  const title = "✅  Get a 🏆 for adding description on this PR.";
  const idea = "Celebrate on every step!";
  message(`${title} - <i>${idea}</i>`);
}

const packageChanges = includes(modifiedFiles, "package.json");
const lockChanges = includes(modifiedFiles, "package-lock.json");
if (packageChanges && !lockChanges) {
  const title =
    ":exclamation: There are package.json changes with no corresponding package-lock.json.";
  const idea =
    "Seems like you added some new package on package.json but you haven't committed package-lock.json file, please commit to avoid unexpected build failures. That's OK as long as you didn't add any new packages.";
  message(`${title} - <i>${idea}</i>`);
}
