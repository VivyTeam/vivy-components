import React from 'react';
import PropTypes from 'prop-types';
import RowStyles from './index.style';

export default function Row({
  children,
  around,
  between,
  bottom,
  middle,
  top,
  start,
  center,
  end,
}) {
  const classAround = around && 'around-xs';
  const classBetween = around && 'between-xs';

  return (
    <RowStyles className={`${classAround} ${classBetween}  row`}>
      {children}
    </RowStyles>
  );
}

Row.propTypes = {
  around: PropTypes.bool, // space-around
  between: PropTypes.bool, // space in between
  bottom: PropTypes.bool, // bottom
  middle: PropTypes.bool, // middle
  top: PropTypes.bool, // top
  start: PropTypes.bool,
  center: PropTypes.bool,
  end: PropTypes.bool,
};

Row.defaultProps = {
  around: false,
  between: false,
  bottom: false,
  middle: false,
  top: false,
  start: false,
  center: false,
  end: false,
};
