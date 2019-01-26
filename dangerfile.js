import { danger, markdown, warn, message } from "danger";
import includes from "lodash.includes";

let messageCount = 0;

// Warn when PR size is large
const bigPRThreshold = 500;
if (danger.github.pr.additions + danger.github.pr.deletions > bigPRThreshold) {
  messageCount += 1;
  warn(`(${messageCount}) Big PR`);
  markdown(
    `> (${messageCount}) : Pull Request size seems relatively large. If Pull Request contains multiple changes, split each into separate PR will helps faster, easier review.`
  );
}

// Warn when PR size is large
if (!danger.github.pr.assignee && !danger.github.pr.title.includes("WIP")) {
  messageCount += 1;
  warn(`(${messageCount}) Missing reviewer`);
  markdown(
    `> (${messageCount}) : Pull Request size like it is missing a reviewer. Please assign at least one.`
  );
} else {
  message("✅ 🏅 for adding a reviewer.");
}

if (danger.github.pr.body.length === 0) {
  messageCount += 1;

  warn("This requests would be more useful with a description.");
} else {
  message("✅ 👍 for adding a description.");
}

const packageChanges = includes(danger.git.modified_files, "package.json");
const lockChanges = includes(danger.git.modified_files, "package-lock.json");
if (packageChanges && !lockChanges) {
  messageCount += 1;
  warn(
    `(${messageCount}) There are package.json changes with no corresponding package-lock.json.`
  );
  markdown(
    `> (${messageCount}) : It might be that you added some new package on package.json file but you havent commited package-lock.json file, please commit to avoid unexpected build failures.`
  );
}

