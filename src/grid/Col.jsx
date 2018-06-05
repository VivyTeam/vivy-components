import React from 'react';
import PropTypes from 'prop-types';

const Col = props => (
  <div className="col">
    {props.children}
  </div>
);

Col.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Col;
