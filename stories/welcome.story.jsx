import React from 'react';
import { storiesOf } from '@storybook/react';
import Welcome from '../src/welcome/WelcomePage';

storiesOf('Welcome', module).add('intro', () => <Welcome />);
