import React from 'react';
import PropTypes from 'prop-types';

export default function Col(props) {
  return <div className="col">{props.children}</div>;
}

Col.propTypes = {
  children: PropTypes.node.isRequired,
};
