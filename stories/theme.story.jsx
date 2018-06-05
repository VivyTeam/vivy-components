import React from 'react';
import { storiesOf } from '@storybook/react';
import ThemeColors from '../src/theme/ThemeColors';

storiesOf('Style', module)
  .add('Colors', () => <ThemeColors />);
