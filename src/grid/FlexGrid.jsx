import React from 'react';
import PropTypes from 'prop-types';
import GridStyles from './grid.style';

const FlexGrid = props => (
  <GridStyles>
    <div className="flex-grid">{props.children}</div>
  </GridStyles>
);

FlexGrid.propTypes = {
  children: PropTypes.node.isRequired
};

export default FlexGrid;
