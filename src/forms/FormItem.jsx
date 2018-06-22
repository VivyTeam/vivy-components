import React from 'react';
import PropTypes from 'prop-types';

export default function FormItem(props) {
  return <div className="form-item">{props.children}</div>;
}

FormItem.propTypes = {
  children: PropTypes.node.isRequired,
};
