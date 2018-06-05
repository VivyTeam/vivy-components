import React from 'react';
import { storiesOf } from '@storybook/react';
import GridExample from '../src/grid/GridExample';

storiesOf('Flex Grid', module)
  .add('Simple Grid', () => (
    <GridExample />
  ));
