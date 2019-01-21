import path from "path";
import fs from "fs";

export function getStorybookUrl() {
  let location = path.join(__dirname, "..", "storybook-static");

  if (fs.existsSync(location)) {
    location = `file://${location}`;
  } else {
    location = "http://localhost:3006";
  }
  return location;
}

export const failureThreshold = () => ({
  failureThreshold: 0.1,
  failureThresholdType: "percent"
});
