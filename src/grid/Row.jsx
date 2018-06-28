import React from 'react';
import PropTypes from 'prop-types';

export default function Row(props) {
  return <div className="row">{props.children}</div>;
}

Row.propTypes = {
  children: PropTypes.node.isRequired,
};
