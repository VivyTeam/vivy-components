import React from 'react';
import { storiesOf, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import SimpleLoader from '../src/animations/SimpleLoader';

setAddon(JSXAddon);

const container = {
  width: '80%',
  margin: '0 auto',
  paddingTop: '100px'
};

storiesOf('Animations', module).addWithJSX('Simple Loader', () => (
  <div style={container}>
    <SimpleLoader />
  </div>
));
