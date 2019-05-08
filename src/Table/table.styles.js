import ReactTable from "react-table";
import styled from "styled-components";
import "react-table/react-table.css";
import colors from "../Colors";

// The styles below are styles that come with
// ReactTable but must be disabled or unset to
// style our table the way we want it.
const WithoutConflictingDefaultStyles = styled(ReactTable)`
  .rt-table {
    .rt-thead.-header {
      box-shadow: unset;
    }
    .rt-thead {
      .rt-th {
        border-right: 0;
      }
      .rt-tr {
        text-align: unset;
      }
    }

    .rt-tbody {
      .rt-td {
        border-right: 0;
      }
      .rt-tr-group {
        border-bottom: unset;
        :last-child {
          border-bottom: unset;
        }
      }
    }
  }
`;

// The styles bellow are extra styles we apply
// ontop of the ReactTable styles to achieve our look
export const StyledTable = styled(WithoutConflictingDefaultStyles)`
  /* Force our selector to be more specific than ReactTables */
  && {
    border: unset;
  }
  && {
    .rt-table {
      overflow: visible;
    }
  }

  .rt-table {
    .rt-thead {
      border: 1px solid ${colors.divider};
      border-radius: 4px 4px 0 0;

      font-size: 12px;
      font-weight: 500;
      height: 32px;
    }
    .rt-tbody {
      .rt-tr-group {
        border: 1px solid ${colors.divider};
        border-top: unset;

        :last-child {
          border-bottom: 1px solid ${colors.divider};
          border-radius: 0 0 4px 4px;
        }
      }
    }
    .rt-th,
    .rt-tr {
      display: flex;
      align-items: center;
    }
    .rt-thead,
    .rt-tbody .rt-tr-group {
      padding-left: 16px;
      padding-right: 16px;
    }
  }
`;
