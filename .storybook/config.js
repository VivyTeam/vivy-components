import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import '../semantic/dist/semantic.min.css';

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
