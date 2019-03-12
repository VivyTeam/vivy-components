import React from "react";
import { StyledTable } from "./table.styles";

const tableWithDefaults = props => {
  const defaultOptions = {
    showPagination: false,
    minRows: 0,

    // Do not allow sorting rows or dragging columns around
    sortable: false,
    resizable: false,

    // Do not show any extra UI when there are no rows
    NoDataComponent: () => null
  };

  return <StyledTable {...defaultOptions} {...props} />;
};

// Pass through all ReactTable props so that we can still
// benefit from prop-types type checks
tableWithDefaults.propTypes = StyledTable.propTypes;

export default tableWithDefaults;
