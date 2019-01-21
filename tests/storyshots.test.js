import "jest-styled-components";
import initStoryshots from "@storybook/addon-storyshots";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

initStoryshots({ framework: "react" });
