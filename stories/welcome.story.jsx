import React from 'react';
import { storiesOf } from '@storybook/react';
import PrinciplesPage from '../src/welcome/PrinciplesPage';
import EthosPage from '../src/welcome/EthosPage';

storiesOf('Welcome', module)
  .add('Principles', () => <PrinciplesPage />)
  .add('Vision & Ethos', () => <EthosPage />);
