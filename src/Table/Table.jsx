import React from "react";
import { StyledTable } from "./table.styles";

const tableWithDefaults = props => {
  const defaultOptions = {
    showPagination: false,
    minRows: 0,
    sortable: false,
    resizable: false
  };

  return <StyledTable {...defaultOptions} {...props} />;
};

// Pass through all ReactTable props so that we can still
// benefit from prop-types type checks
tableWithDefaults.propTypes = StyledTable.propTypes;

export default tableWithDefaults;
