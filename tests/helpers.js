import path from "path";
import devices from "puppeteer/DeviceDescriptors";

export function getStorybookUrl() {
  const location = path.join(__dirname, "..", "storybook-static");
  console.log({ location });

  return `file://${location}`;
}

export const failureThreshold = () => ({
  failureThreshold: 0.1,
  failureThresholdType: "percent",
});

const tablet = devices["iPad landscape"];
export const customizePage = (page) => page.emulate(tablet);
export const beforeScreenshot = (page) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      page.emulate(tablet);
      resolve();
    }, 200)
  );
};
