import path from "path";
import fs from "fs";
import devices from "puppeteer/DeviceDescriptors";

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

const tablet = devices["iPad landscape"];
export const customizePage = page => page.emulate(tablet);
export const beforeScreenshot = () => {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve();
    }, 100)
  );
};
