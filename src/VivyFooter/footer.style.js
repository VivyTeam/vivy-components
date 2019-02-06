import styled from "styled-components";
import { Colors } from "../index";

const Styles = styled.div`
  border-top: 1px solid ${Colors.divider};

  .anchor {
    border-right: 1px solid #cdcdcd;
    padding: 0 16px;
    margin-bottom: 35px;
    margin-top: 35px;
  }

  .last {
    border: none;
  }
`;

export default Styles;
