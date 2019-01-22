import initStoryshots from "@storybook/addon-storyshots";
import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer";
import devices from "puppeteer/DeviceDescriptors";
import { failureThreshold, getStorybookUrl } from "./helpers";

const tablet = devices["iPad landscape"];
const customizePage = page => page.emulate(tablet);
const beforeScreenshot = page => page.emulate(tablet);

initStoryshots({
  suite: "Image storyshots",
  framework: "react",
  test: imageSnapshot({
    storybookUrl: getStorybookUrl(),
    getMatchOptions: failureThreshold,
    customizePage,
    beforeScreenshot
  })
});
