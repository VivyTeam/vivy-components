import { addDecorator, configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { setDefaults } from '@storybook/addon-info';

setDefaults({
  header: true,
  inline: true,
});

setOptions({
  name: 'Vivy',
  url: 'https://www.vivy.com/',
  showStoriesPanel: true,
  showAddonPanel: true,
});

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
