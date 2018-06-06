import React from 'react';
import { storiesOf } from '@storybook/react';
import ThemeColors from '../src/theme/ThemeColors';
import ThemeFonts from '../src/theme/ThemeFonts';
import ThemeLogos from '../src/theme/ThemeLogos';

storiesOf('Style', module)
  .add('Colors', () => <ThemeColors />)
  .add('Typography', () => <ThemeFonts />)
  .add('Logos', () => <ThemeLogos />);
