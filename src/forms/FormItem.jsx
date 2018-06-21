import React from 'react';
import PropTypes from 'prop-types';

const FormItem = props => <div className="form-item">{props.children}</div>;

FormItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormItem;
